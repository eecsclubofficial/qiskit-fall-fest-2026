import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IBM Qiskit Fall Fest 2026 | IISER Bhopal",
  description:
    "Official marketing and registration portal for IBM Qiskit Fall Fest 2026 at IISER Bhopal, co-organized by the EECS Club and Physics Club. Explore quantum computing workshops, hackathons, and talks in October 2026.",
  keywords: [
    "Qiskit Fall Fest 2026",
    "IBM Quantum",
    "IISER Bhopal",
    "EECS Club",
    "Physics Club",
    "Quantum Computing",
    "Qiskit SDK",
    "Quantum Hackathon",
    "Bhopal Tech Fest",
  ],
  authors: [
    { name: "EECS Club IISER Bhopal" },
    { name: "Physics Club IISER Bhopal" },
  ],
  openGraph: {
    title: "IBM Qiskit Fall Fest 2026 | IISER Bhopal",
    description:
      "Join us for an intensive collegiate quantum computing festival in October 2026. Workshops, hands-on labs, and hackathon at IISER Bhopal.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} dark`}
    >
      <body className="bg-foundation-bg text-foundation-light min-h-screen antialiased selection:bg-qiskit-purple selection:text-white">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
