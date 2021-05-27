import React from "react";
import { Route, Redirect } from "react-router-dom";

const hashLogout = {
  customer: "cust_id",
  admin: "admin_id",
  tl: "tl_id"
};

const ProtectedRoute = ({ component:Component, children, ...rest }) => {
  const custType = rest.location.pathname.split("/")[1]
  console.log(custType);  
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem(hashLogout[custType]) ? (
          <Component {...props}/>
        ) : (
          <Redirect
            to={{
              pathname: `/${custType}/login`,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;