import { surpriseMePrompts } from "../constants";

export function getRamdomPrompt(prompt: string): string {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRamdomPrompt(prompt);

  return randomPrompt;
}
