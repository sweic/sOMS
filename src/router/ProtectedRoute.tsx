import React from "react";
import { useNavigate } from "react-router-dom";
import { useValidateJwtQuery } from "../generated/graphql";
import Loading from "../shared/components/Loading/Loading";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const navigate = useNavigate();
  const { data, loading } = useValidateJwtQuery();
  if (data && data.validateJWT === false) navigate("/");

  return (
    <>{loading ? <Loading /> : data && data.validateJWT ? children : null}</>
  );
}

export default ProtectedRoute;
