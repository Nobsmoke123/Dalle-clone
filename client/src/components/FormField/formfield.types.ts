import { ChangeEvent } from "react";

export interface FormFieldProps {
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (e: ChangeEvent) => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
}
