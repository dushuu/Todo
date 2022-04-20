import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth0();
  if(!isLoading){
  return user ? children : <Navigate to="/" />;
  }
  else {return <div >loading.444.</div>}
};
