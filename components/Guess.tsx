import { NextPage } from "next";
import styles from "../styles/components/Guess.module.scss";

interface GuessProps {
  position: number;
  guessedNumber: number;
  className: string;
}

const Guess: NextPage<GuessProps> = ({
  position,
  guessedNumber,
  className,
}) => {
  return (
    <div className={[styles.wrapper, className].join(" ")}>
      <h1 className={styles.position}>#{position}</h1>
      <h1 className={styles.guessedNumber}>{guessedNumber}</h1>
    </div>
  );
};

export default Guess;
