import React, { ReactNode } from "react";
import { Route } from "react-router-dom";

type Props = {
  children?: ReactNode;
  onBackClick?: () => void;
  onNextClick?: () => void;
  onSubmitClick?: () => void;
  lastTab?: boolean;
};

export const FormWrapper = ({
  children,
  onBackClick,
  onNextClick,
  onSubmitClick,
  lastTab
}: Props) => {
  return (
    <Route
      render={({
        match: {
          params: { name }
        }
      }) => (
        <div>
          {children}
          <hr />
          {name ? (
            <button type="button" onClick={onSubmitClick}>
              Update
            </button>
          ) : (
            <>
              {onBackClick && (
                <button type="button" onClick={onBackClick}>
                  Back
                </button>
              )}
              {onNextClick && (
                <button type="button" onClick={onNextClick}>
                  Next
                </button>
              )}
              {lastTab && (
                <button type="button" onClick={onSubmitClick}>
                  Create
                </button>
              )}
            </>
          )}
        </div>
      )}
    />
  );
};
