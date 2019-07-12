import React from "react";
import { Form } from "../components/Form";
import { NavLink } from "react-router-dom";
import { useSummary } from "../apiHooks";

type Props = {
  match: {
    params: {
      name: string;
      id: string;
    };
  };
};

export const UpdateForm = ({
  match: {
    params: { name, id }
  }
}: Props) => {
  const [{ summaryList }, actions] = useSummary();
  const currentSummary = summaryList.find(({ id: ID }) => ID === Number(id));

  return (
    <div>
      <h1>UpdateForm</h1>
      <NavLink to="/">Catalog</NavLink>
      <Form
        handleSubmit={actions.updateSummary}
        initialValues={currentSummary || {}}
        currentStep={name}
      />
    </div>
  );
};
