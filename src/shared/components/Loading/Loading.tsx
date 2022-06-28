import { Center, Loader } from "@mantine/core";
import React from "react";
import { color } from "../../../styles/constants";

function Loading() {
  return <Loader style={{ margin: "auto" }} color={color.primary} />;
}

export default Loading;
