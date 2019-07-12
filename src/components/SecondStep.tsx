import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Field } from "formik";

type Props = {
  changeStep: (step: string) => void;
  handleSubmit: () => void;
};

export const SecondStep = ({ changeStep, handleSubmit }: Props) => {
  return (
    <FormWrapper
      onBackClick={() => changeStep("FirstStep")}
      onNextClick={() => changeStep("ThirdStep")}
      onSubmitClick={handleSubmit}
    >
      <h1>SecondStep</h1>
      <Field name="login" placeholder="login" />
      <Field name="password" placeholder="password" />
    </FormWrapper>
  );
};
