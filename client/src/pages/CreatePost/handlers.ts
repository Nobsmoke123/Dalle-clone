import React, { ChangeEvent, FormEvent } from "react";
import { SetFormState } from "./createPost.types";

export const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
};

export const handleChange =
  (
    form: SetFormState,
    setForm: React.Dispatch<React.SetStateAction<SetFormState>>
  ): React.ChangeEventHandler =>
  (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

export const handleSurpriseMe = () => {};

export const generateImage = () => {};
