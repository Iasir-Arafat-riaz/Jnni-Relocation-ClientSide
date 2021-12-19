import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
const { user,isLoading } = useAuth();
if (isLoading) {
  return (
    <div style={{ color: "red", textAlign:"center" }}>
      <h4 >Please wait few second....</h4>
      <Spinner animation="border" variant="danger" />
    </div>
  );
}
  return <div>{user.email ? children : <Navigate to="/login" />}</div>;
};

export default PrivateRoute;
