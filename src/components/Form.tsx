import React, { useState, useEffect } from "react";
import { Formik, FormikProps } from "formik";
import { FirstStep, ThirdStep, SecondStep } from "./index";
import { history } from "../history";

type Props = {
  handleSubmit: (state: object) => void;
  initialValues: object;
  currentStep?: string;
};

type TFormik = {
  history: Array<{}>;
  handleSubmit: () => void;
};

export const Form = ({ handleSubmit, initialValues, currentStep }: Props) => {
  const [step, changeStep] = useState("FirstStep");
  useEffect(() => {
    currentStep && changeStep(currentStep);
  }, []);
  return (
    <div className="App">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
          setTimeout(() => {
            setSubmitting(false);
            history.push("/");
          }, 500);
        }}
        render={({ values, handleSubmit }: FormikProps<TFormik>) => {
          return (
            <form>
              {step === "FirstStep" && (
                <FirstStep
                  handleSubmit={handleSubmit}
                  changeStep={changeStep}
                />
              )}
              {step === "SecondStep" && (
                <SecondStep
                  handleSubmit={handleSubmit}
                  changeStep={changeStep}
                />
              )}
              {step === "ThirdStep" && (
                <ThirdStep
                  handleSubmit={handleSubmit}
                  changeStep={changeStep}
                  history={values.history}
                />
              )}
            </form>
          );
        }}
      />
    </div>
  );
};
