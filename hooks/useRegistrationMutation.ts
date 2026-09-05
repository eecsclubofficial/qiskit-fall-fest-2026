"use client";

import { useMutation } from "@tanstack/react-query";

export interface RegistrationPayload {
  fullName: string;
  email: string;
  institution: string;
  role: string;
  experience: string;
  specialRequirements?: string;
  consent: boolean;
}

export interface RegistrationResponse {
  success: boolean;
  message: string;
  registeredAt: string;
}

async function submitRegistrationApi(
  data: RegistrationPayload
): Promise<RegistrationResponse> {
  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();

  if (!res.ok) {
    throw new Error(json.error || "Submission failed. Please try again.");
  }

  return json;
}

export function useRegistrationMutation() {
  return useMutation({
    mutationFn: submitRegistrationApi,
  });
}
