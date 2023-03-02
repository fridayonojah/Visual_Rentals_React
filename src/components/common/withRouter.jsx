import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

/***
 Due to some of the changes in react v6 i had to create this
 helper file for geting any info from any url
 *  */

const withRouter = (WrappedComponent) => (props) => {
  return (
    <WrappedComponent
      {...props}
      params={useParams()}
      navigate={useNavigate()}
      location={useLocation()}
    />
  );
};

export default withRouter;
