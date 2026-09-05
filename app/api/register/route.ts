import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

function getSheetsClient() {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

  if (!privateKey || !serviceAccountEmail) {
    throw new Error("Missing Google service account credentials");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: serviceAccountEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { fullName, email, institution, role, experience, specialRequirements } =
    body as {
      fullName?: string;
      email?: string;
      institution?: string;
      role?: string;
      experience?: string;
      specialRequirements?: string;
    };

  if (!fullName?.trim() || !email?.trim() || !email.includes("@")) {
    return NextResponse.json(
      { success: false, error: "Full name and valid email are required." },
      { status: 400 }
    );
  }

  if (!institution?.trim()) {
    return NextResponse.json(
      { success: false, error: "Institution is required." },
      { status: 400 }
    );
  }

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  if (!spreadsheetId) {
    return NextResponse.json(
      { success: false, error: "Server configuration error." },
      { status: 500 }
    );
  }

  try {
    const sheets = getSheetsClient();
    const registeredAt = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            registeredAt,
            fullName.trim(),
            email.trim(),
            institution.trim(),
            role || "Student",
            experience || "Beginner",
            specialRequirements?.trim() || "",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Registration interest successfully recorded",
      registeredAt,
    });
  } catch (error) {
    console.error("Google Sheets API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save registration. Please try again." },
      { status: 500 }
    );
  }
}
