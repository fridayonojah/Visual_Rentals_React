import React from "react";
import {  Navigate, useLocation } from "react-router-dom";
import auth from "../../services/authService";

function Protected({ children }) {
    const location = useLocation();
    
    if (!auth.getCurrentUser()) {
      return <
        Navigate to={"/login"}
        state={{ from: location}} 
       replace />
    }
    return children
  }
export default Protected