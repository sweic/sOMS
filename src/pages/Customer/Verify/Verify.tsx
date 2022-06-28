import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useValidateTableTokenQuery } from "../../../generated/graphql";
import Loading from "../../../shared/components/Loading/Loading";
import { customerCache } from "../../../shared/graphql/Customer/gql";

function Verify() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { client } = useValidateTableTokenQuery({
    variables: {
      token: token!,
    },
    onCompleted: (data) => {
      localStorage.setItem("token", token!);
      client.writeQuery({
        query: customerCache,
        data: data.validateTableToken,
      });
      navigate("/order/sections");
    },
    onError: () => {
      localStorage.removeItem("token");
      navigate("/error");
      return;
    },
  });

  return <Loading />;
}

export default Verify;
