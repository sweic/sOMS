import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../../shared/components/Form/Form";
import { CreateTypes } from "../../../shared/components/FormEntities/Create";
import Loading from "../../../shared/components/Loading/Loading";
import {
  checkRequiredFields,
  entityDefaultValues,
} from "../../../shared/constants/createValues";
import { MenuEntityFragment } from "../../../shared/graphql/Admin/types";
import { useLocationState } from "../../../shared/hooks/useLocationState";
import { useMergeState } from "../../../shared/hooks/useMergeState";
import { useReadFragment } from "../../../shared/hooks/useReadFragment";
import { Entity } from "../../../shared/graphql/Admin/types";
import { useCleanData } from "../hooks/useCleanData";
import { CleanInput, useCreateMutation } from "../hooks/useCreateMutation";
import { menuFragment } from "../Menus/Entities/fragments";
import { CreateContainer } from "./Styles";
export const EntityArray = ["item", "section", "menu"];
interface CreateLocationProps {
  menuid: number;
}
function Create() {
  const state = useLocationState<CreateLocationProps>();
  const { type } = useParams();
  const [data] = useReadFragment<MenuEntityFragment>(
    state && state.menuid,
    "Menu",
    menuFragment
  );
  const { cleanedData } = useCleanData(data);
  const navigate = useNavigate();
  const { value: mutationState, mergeState: mergeMutationState } =
    useMergeState();
  const creator = useCreateMutation(type as Entity);
  useEffect(() => {
    if (!type) {
      navigate("/fetch");
    }
    if (state && state.menuid) {
      mergeMutationState({
        ...entityDefaultValues[type as Entity],
        menu: { id: state.menuid },
      });
    } else {
      mergeMutationState({ ...entityDefaultValues[type as Entity] });
    }
  }, [type, state]);

  const submitHandler = async () => {
    if (!checkRequiredFields(type as Entity, mutationState)) return;
    await creator(mutationState as CleanInput);
  };

  return (
    <>
      <CreateContainer>
        {Object.keys(mutationState).length !== 0 &&
        EntityArray.includes(type!) ? (
          <Form
            submitHandler={submitHandler}
            entityComponents={CreateTypes[type as Entity].components(
              mutationState,
              mergeMutationState,
              cleanedData
            )}
          />
        ) : (
          <Loading />
        )}
      </CreateContainer>
    </>
  );
}

export default Create;
