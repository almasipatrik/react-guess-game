import { NextPage } from "next";
import Head from "next/head";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import styles from "../../styles/Settings.module.scss";
import { Controller, useForm } from "react-hook-form";
import Router from "next/router";

const Settings: NextPage = () => {
  const {
    handleSubmit,
    setValue,
    formState: { isValid, isDirty },
    control,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (formData: { [x: string]: any }) => {
    Router.push(`/in-game/${formData.selectedNumber}`);
  };

  const getRandomNumber = () => Math.floor(Math.random() * (400 - 1 + 1)) + 1;

  return (
    <>
      <Head>
        <title>🔧 Settings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        style={{ width: 300, height: 300 }}
        src="/assets/images/circles/numbers.svg"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="textWrapper">
          <h1>Choose a number</h1>
          <Controller
            name="selectedNumber"
            defaultValue={""}
            control={control}
            rules={{
              required: { message: "Please enter a number", value: true },
              validate: (inputValue) =>
                !isNaN(inputValue) || "Please enter a valid number",
            }}
            render={({ field }) => {
              return (
                <CustomInput
                  className={styles.input}
                  placeholder="Enter your number here..."
                  onChange={field.onChange}
                  value={field.value}
                  isValid={!isValid && isDirty}
                />
              );
            }}
          />
          <p
            className={styles.random}
            onClick={() =>
              setValue("selectedNumber", getRandomNumber(), {
                shouldValidate: true,
              })
            }
          >
            Random
          </p>
        </div>
        <CustomButton disabled={!isValid} title="Confirm" />
      </form>
    </>
  );
};

export default Settings;
