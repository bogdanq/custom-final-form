import React from "react";
import { Form } from "../components/Form";
import { NavLink } from "react-router-dom";
import { useSummary } from "../apiHooks";

const initialValues = {
  firstName: "",
  lastName: "",
  login: "",
  password: "",
  history: [
    {
      companyName: "",
      description: ""
    }
  ]
};

export const CreateForm = () => {
  const [_, actions] = useSummary();
  return (
    <div>
      <h1>CreateForm</h1>
      <NavLink to="/">Catalog</NavLink>
      <Form
        handleSubmit={actions.createSummary}
        initialValues={initialValues}
      />
    </div>
  );
};
