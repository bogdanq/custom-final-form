import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Field } from "formik";

type Props = {
  changeStep: (step: string) => void;
  handleSubmit: () => void;
};

export const FirstStep = ({ changeStep, handleSubmit }: Props) => {
  return (
    <FormWrapper
      onSubmitClick={handleSubmit}
      onNextClick={() => changeStep("SecondStep")}
    >
      <Field name="firstName" placeholder="firstName" />
      <Field name="lastName" placeholder="lastName" />
    </FormWrapper>
  );
};
