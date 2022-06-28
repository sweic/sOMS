import { ActionIcon, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "tabler-icons-react";
import { FormEntityComponent } from "../FormEntities/Edit";

interface FormProps {
  submitHandler: () => void;
  entityComponents: FormEntityComponent[];
}
function Form({ submitHandler, entityComponents }: FormProps) {
  const navigate = useNavigate();
  return (
    <>
      <ActionIcon>
        <ArrowLeft onClick={() => navigate(-1)} cursor="pointer" />
      </ActionIcon>
      <Group direction="column" spacing="lg" grow>
        {entityComponents.map((component) => {
          if (component && component.component)
            return (
              <Group
                key={component.componentName}
                direction="column"
                spacing="sm"
                grow
              >
                <label>{component.componentName}</label>
                {component.component}
              </Group>
            );
        })}
        <Button
          style={{ marginTop: "1.5em", margin: "0 auto" }}
          onClick={() => submitHandler()}
        >
          Submit
        </Button>
      </Group>
    </>
  );
}

export default Form;
