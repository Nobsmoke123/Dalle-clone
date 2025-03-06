import React, { ChangeEvent, FormEvent } from "react";
import { SetFormState } from "./createPost.types";
import { getRamdomPrompt } from "../../utils";
import { BASE_URL } from "../../constants";

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

export const generateImage =
  (
    form: SetFormState,
    setForm: React.Dispatch<React.SetStateAction<SetFormState>>,
    setGeneratingImg: React.Dispatch<React.SetStateAction<boolean>>
  ) =>
  async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(`${BASE_URL}/dalle`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();

        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        console.log(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt.");
    }
  };
