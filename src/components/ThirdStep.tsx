import React from "react";
import { FormWrapper } from "./FormWrapper";
import { FieldArray, Field } from "formik";

type TPropsStep = {
  changeStep: (step: string) => void;
  handleSubmit: () => void;
  history: Array<{}>;
};

type TPropsList = {
  index: number;
  remove: (index: number) => void;
  history: Array<{}>;
};

const HistoryList = ({ index, remove, history }: TPropsList) => {
  return (
    <div key={index}>
      <Field name={`history[${index}].companyName`} placeholder="companyName" />
      <Field name={`history[${index}].description`} placeholder="description" />
      {history.length > 1 && (
        <button type="button" onClick={() => remove(index)}>
          remove
        </button>
      )}
    </div>
  );
};

export const ThirdStep = ({
  changeStep,
  handleSubmit,
  history
}: TPropsStep) => {
  return (
    <FormWrapper
      onBackClick={() => changeStep("SecondStep")}
      onSubmitClick={handleSubmit}
      lastTab
    >
      <h1>ThirdStep</h1>
      <FieldArray
        name="history"
        render={({ remove, push }) => (
          <div>
            {history.map((_, index) => (
              <HistoryList index={index} remove={remove} history={history} />
            ))}
            <button
              type="button"
              onClick={() => push({ companyName: "", description: "" })}
            >
              add
            </button>
          </div>
        )}
      />
    </FormWrapper>
  );
};
