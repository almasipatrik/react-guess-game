import { NextPage } from "next";
import TextField from "@mui/material/TextField";
import styles from "../styles/components/CustomInput.module.scss";
import { ChangeEventHandler, useState } from "react";

interface CustomInputInterface {
  placeholder?: string;
  className?: string;
  error?: string;
  isValid?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string | number;
}

const CustomInput: NextPage<CustomInputInterface> = ({
  placeholder,
  className,
  onChange,
  error,
  isValid,
  value,
}) => {
  return (
    <TextField
      className={[styles.textField, className].join(" ")}
      placeholder={placeholder}
      onChange={onChange}
      variant="outlined"
      error={isValid}
      helperText={error}
      value={value}
    />
  );
};

export default CustomInput;
