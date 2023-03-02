import React from "react";
import { Route, Navigate } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({  element:Component, element, ...rest }) => {
    return (
      <Route
        {...rest}

        element={props => {
          if (!auth.getCurrentUser())
            return (
              <Navigate to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            );
            return Component ? <Component {...props} /> : null;
        }}
      />
  );
};

export default ProtectedRoute;
