import Head from "next/head";
import CustomIconButton from "../../components/CustomIconButton";
import GuessList from "../../components/GuessList";
import styles from "../../styles/InGame.module.scss";
import Router from "next/router";
import GuessLoader from "../../components/GuessLoader";
import { useEffect, useState } from "react";
import GuessModel from "../../models/GuessModel.model";

interface InGameProps {
  selectedNumber: number;
}

const InGame = ({ selectedNumber }: InGameProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isGameOn, setIsGameOn] = useState<boolean>(true);
  const [guessedNumber, setGuessedNumber] = useState<number>(0);
  const [guesses, setGuesses] = useState<GuessModel[]>([]);

  const getRandomNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const getNewGuess = (answer: "lower" | "higher") => {
    setIsLoading(true);

    setTimeout(() => {
      const randomNumber =
        answer === "higher"
          ? getRandomNumber(guessedNumber + 1, +selectedNumber)
          : getRandomNumber(1, guessedNumber - 1);

      setGuessedNumber(randomNumber);
      setIsLoading(false);
    }, 1200);
  };

  const setNewGuess = () => {
    setGuesses((prevValue) => {
      return [
        { position: prevValue.length + 1, guessedNumber: guessedNumber },
        ...prevValue,
      ];
    });
  };

  const userAnswer = (condition: boolean, answer: "lower" | "higher") => {
    if (condition) alert("Don't cheat!");
    else {
      setNewGuess();
      getNewGuess(answer);
    }
  };

  const lower = () => userAnswer(guessedNumber < selectedNumber, "lower");
  const higher = () => userAnswer(guessedNumber > selectedNumber, "higher");

  useEffect(() => {
    getNewGuess("higher");
  }, []);

  useEffect(() => {
    if (+selectedNumber === guessedNumber) setIsGameOn(false);
  }, [guessedNumber]);

  return (
    <>
      <Head>
        <title>🎮 Play</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Higher or Lower?</h1>
      {selectedNumber ? (
        <p className={styles.hint}>Your selected number: {selectedNumber}</p>
      ) : null}
      <div className={styles.box}>
        <div className={styles.loader}>
          {!isLoading ? (
            <h1 className={styles.guessedNumber}>{guessedNumber}</h1>
          ) : (
            <GuessLoader />
          )}
        </div>
        <div className={styles.buttons}>
          {isGameOn ? (
            <>
              {" "}
              <CustomIconButton icon={"arrow-down"} onClick={() => lower()} />
              <CustomIconButton icon={"arrow-up"} onClick={() => higher()} />
            </>
          ) : (
            <CustomIconButton
              icon={"tick"}
              onClick={() => Router.push(`/end?score=${guesses.length}`)}
            />
          )}
        </div>
      </div>
      <p className={styles.guessTitle}>Opponent's guesses</p>
      <span className={styles.line} />
      <GuessList guesses={guesses} />
    </>
  );
};

InGame.getInitialProps = async ({ query }: { [key: string]: any }) => {
  const props: InGameProps = {
    selectedNumber: query["id"],
  };

  return props;
};

export default InGame;
