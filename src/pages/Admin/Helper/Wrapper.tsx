import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetchAllMenusQuery } from "../../../generated/graphql";
import Loading from "../../../shared/components/Loading/Loading";
import { normaliseData } from "../../../shared/utils/normaliseData";

function Wrapper() {
  const navigate = useNavigate();

  useFetchAllMenusQuery({
    fetchPolicy: "cache-first",
    onCompleted: (data) => {
      normaliseData(data);
      navigate("/admin/service");
    },
  });

  return <Loading />;
}

export default Wrapper;
