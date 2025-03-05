import React, { ChangeEvent, FormEvent } from "react";
import { SetFormState } from "./createPost.types";
import { getRamdomPrompt } from "../../utils";

export const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
};

/**
 * A closure function that takes in the current state and the React dispatch action for updating state.
 * The function returns a React.ChangeEventHandler function that handles the onChange event.
 * @param form
 * @param setForm
 * @returns React.ChangeEventHandler
 */
export const handleChange =
  (
    form: SetFormState,
    setForm: React.Dispatch<React.SetStateAction<SetFormState>>
  ): React.ChangeEventHandler =>
  (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

// Another closure
export const handleSurpriseMe =
  (
    form: SetFormState,
    setForm: React.Dispatch<React.SetStateAction<SetFormState>>
  ) =>
  () => {
    const ramdomPrompt = getRamdomPrompt(form.prompt);
    setForm({ ...form, prompt: ramdomPrompt });
  };

export const generateImage = () => {};
