import { Button, Center, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "tabler-icons-react";
import { useValidateUserMutation } from "../../../generated/graphql";
function Auth() {
  const [validate] = useValidateUserMutation();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const validateHandler = async () => {
    const res = await validate({
      variables: {
        token: value,
      },
    });
    if (res.data?.validateUser.id === 0) navigate("/fetch");
  };

  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        minWidth: "330px",
      }}
    >
      <TextInput
        onChange={(val) => setValue(val.currentTarget.value)}
        value={value}
        placeholder="Enter token"
      />
      <Center>
        <Button onClick={() => validateHandler()}>Submit</Button>
      </Center>
    </div>
  );
}

export default Auth;
