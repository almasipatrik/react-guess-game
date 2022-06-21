import { NextPage } from "next";
import { MouseEventHandler } from "react";
import Button from "@mui/material/Button";
import styles from "../styles/components/CustomButton.module.scss";

interface CustomButtonProps {
  title: string;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: NextPage<CustomButtonProps> = ({
  title,
  disabled,
  onClick,
  className,
}: CustomButtonProps) => {
  return (
    <Button
      type="submit"
      className={[styles.button, className].join(" ")}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};
export default CustomButton;
