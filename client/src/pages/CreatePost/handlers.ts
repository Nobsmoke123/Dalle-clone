import { ChangeEvent, FormEvent } from "react";

export const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
};

export const handleChange = (event: ChangeEvent) => {
  event.preventDefault();
};

export const handleSurpriseMe = () => {};

export const generateImage = () => {};
