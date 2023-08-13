import { FieldData } from '../const';

type FieldState = {
  value: string;
  isValid: boolean;
  regex: RegExp;
  errorText: string;
}

export type FormState = Record<keyof typeof FieldData, FieldState>;
