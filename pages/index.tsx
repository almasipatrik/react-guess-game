import type { NextPage } from "next";
import Head from "next/head";
import CustomButton from "../components/CustomButton";
import Router from "next/router";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>📕 Introduction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        style={{ width: 300, height: 300 }}
        src="/assets/images/circles/puzzle.svg"
      />
      <div className="textWrapper">
        <h1>Guess Game</h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <CustomButton title="Continue" onClick={() => Router.push("/settings")} />
    </>
  );
};

export default Home;
