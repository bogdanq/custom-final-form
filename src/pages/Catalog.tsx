import React from "react";
import { NavLink } from "react-router-dom";
import { useSummary } from "../apiHooks";

export const Catalog = () => {
  const [{ summaryList }, actions] = useSummary();
  return (
    <div>
      <h1>Catalog</h1>
      <NavLink to="/create">Create summary</NavLink>
      {summaryList.map(item => (
        <div key={item.id} className="wrapper">
          <hr />
          <h1>
            {item.firstName} {item.lastName}
          </h1>
          <NavLink to={`/update/FirstStep/${item.id}`}>Edit name</NavLink>
          <h2>
            {item.login} {item.password}
          </h2>
          <NavLink to={`/update/SecondStep/${item.id}`}>Edit data</NavLink>
          {item.history.map((obj, index) => (
            <div key={index}>
              <h1>{obj.companyName}</h1>
              <p>{obj.description}</p>
            </div>
          ))}
          <NavLink to={`/update/ThirdStep/${item.id}`}>Edit history</NavLink>
          <button
            className="delete"
            onClick={() => actions.deleteSummary(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
