import { NextPage } from "next";
import Head from "next/head";
import CustomButton from "../../components/CustomButton";
import Router from "next/router";
import styles from "../../styles/End.module.scss";

interface EndProps {
  score: number;
}

const End = ({ score }: EndProps) => {
  return (
    <>
      <Head>
        <title>🏁 Game Over</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        style={{ width: 300, height: 300 }}
        src="/assets/images/circles/tick.svg"
      />
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>Game Over</h1>
        <p>SCORE: {score}</p>
      </div>
      <CustomButton
        className={styles.tryAgain}
        onClick={() => Router.push("/settings")}
        title="try again"
      />
    </>
  );
};

End.getInitialProps = async ({ query }: { [key: string]: any }) => {
  const props: EndProps = {
    score: query.score,
  };

  return props;
};

export default End;
