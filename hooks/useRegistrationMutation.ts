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
  // [INTEGRATION READY]: Connect to real endpoint (Supabase / Google Sheets / Server Action)
  await new Promise((resolve) => setTimeout(resolve, 600));

  return {
    success: true,
    message: "Registration interest successfully recorded",
    registeredAt: new Date().toISOString(),
  };
}

export function useRegistrationMutation() {
  return useMutation({
    mutationFn: submitRegistrationApi,
  });
}
