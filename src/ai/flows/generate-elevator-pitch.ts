'use server';
/**
 * @fileOverview AI-powered elevator pitch generator for developers.
 *
 * - generateElevatorPitch - A function that generates an elevator pitch.
 * - GenerateElevatorPitchInput - The input type for the generateElevatorPitch function.
 * - GenerateElevatorPitchOutput - The return type for the generateElevatorPitch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateElevatorPitchInputSchema = z.object({
  name: z.string().describe('The name of the developer.'),
  title: z.string().describe('The current job title of the developer.'),
  experienceSummary: z.string().describe('A summary of the developer\'s work experience, including key roles, responsibilities, and achievements.'),
  skills: z.string().describe('A list of the developer\'s key skills and technologies.'),
  careerGoals: z.string().describe('The developer\'s career goals and aspirations.'),
});
export type GenerateElevatorPitchInput = z.infer<typeof GenerateElevatorPitchInputSchema>;

const GenerateElevatorPitchOutputSchema = z.object({
  elevatorPitch: z.string().describe('A concise elevator pitch summarizing the developer\'s qualifications and career trajectory.'),
});
export type GenerateElevatorPitchOutput = z.infer<typeof GenerateElevatorPitchOutputSchema>;

export async function generateElevatorPitch(input: GenerateElevatorPitchInput): Promise<GenerateElevatorPitchOutput> {
  return generateElevatorPitchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateElevatorPitchPrompt',
  input: {schema: GenerateElevatorPitchInputSchema},
  output: {schema: GenerateElevatorPitchOutputSchema},
  prompt: `You are a professional resume writer specializing in creating concise and impactful elevator pitches for developers.

  Given the following information about a developer, generate an elevator pitch that summarizes their qualifications, experience, and career goals.

  Name: {{{name}}}
  Title: {{{title}}}
  Experience Summary: {{{experienceSummary}}}
  Skills: {{{skills}}}
  Career Goals: {{{careerGoals}}}

  Elevator Pitch:`,
});

const generateElevatorPitchFlow = ai.defineFlow(
  {
    name: 'generateElevatorPitchFlow',
    inputSchema: GenerateElevatorPitchInputSchema,
    outputSchema: GenerateElevatorPitchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
