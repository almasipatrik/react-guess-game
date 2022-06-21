import { NextPage } from "next";
import GuessModel from "../models/GuessModel.model";
import styles from "../styles/components/GuessList.module.scss";
import Guess from "./Guess";

interface GuessListProps {
  guesses: GuessModel[];
}

const GuessList: NextPage<GuessListProps> = ({ guesses }) => {
  return (
    <div className={styles.guesses}>
      {guesses.map((guess) => {
        return (
          <Guess
            className={styles.guess}
            position={guess.position}
            guessedNumber={guess.guessedNumber}
          />
        );
      })}
    </div>
  );
};

export default GuessList;
