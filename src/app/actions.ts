'use server';

import { z } from 'zod';
import { generateElevatorPitch as aiGenerateElevatorPitch } from '@/ai/flows/generate-elevator-pitch';
import type { GenerateElevatorPitchInput, GenerateElevatorPitchOutput } from '@/ai/flows/generate-elevator-pitch';

// Contact Form
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = ContactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  // Simulate sending email
  console.log("Contact form submitted:", parsed.data);
  // In a real app, you would send an email here.

  return { message: "Your message has been sent successfully!", success: true };
}


// Elevator Pitch Generator
export type ElevatorPitchState = {
  pitch?: string;
  error?: string;
  isLoading: boolean;
};

export async function generateElevatorPitchAction(
  input: GenerateElevatorPitchInput
): Promise<ElevatorPitchState> {
  try {
    const result: GenerateElevatorPitchOutput = await aiGenerateElevatorPitch(input);
    return { pitch: result.elevatorPitch, isLoading: false };
  } catch (error) {
    console.error("Error generating elevator pitch:", error);
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return { error: `Failed to generate pitch: ${errorMessage}`, isLoading: false };
  }
}