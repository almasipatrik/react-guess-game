import { NextPage } from "next";
import { MouseEventHandler } from "react";
import Button from "@mui/material/Button";
import styles from "../styles/components/CustomIconButton.module.scss";

interface CustomButtonProps {
  icon: "arrow-up" | "arrow-down" | "tick";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton: NextPage<CustomButtonProps> = ({
  onClick: onClick,
  icon,
}: CustomButtonProps) => {
  const getIcon = () => {
    switch (icon) {
      case "arrow-up":
        return (
          <img className={styles.img} src="/assets/images/arrows/up.svg" />
        );
      case "arrow-down":
        return (
          <img className={styles.img} src="/assets/images/arrows/down.svg" />
        );
      case "tick":
        return <img className={styles.img} src="/assets/images/tick.svg" />;
      default:
        throw new Error("Icon does not exist");
    }
  };

  return (
    <Button type="submit" className={styles.button} onClick={onClick}>
      {getIcon()}
    </Button>
  );
};
export default CustomButton;
