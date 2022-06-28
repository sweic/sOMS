import { DocumentNode } from "graphql";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../shared/components/Form/Form";
import { EditTypes } from "../../../shared/components/FormEntities/Edit";
import Loading from "../../../shared/components/Loading/Loading";
import { checkRequiredFields } from "../../../shared/constants/createValues";
import {
  FoodItemEntityFragment,
  MenuEntityFragment,
  SectionEntityFragment,
} from "../../../shared/graphql/Admin/types";
import { useLocationState } from "../../../shared/hooks/useLocationState";
import { useMergeState } from "../../../shared/hooks/useMergeState";
import { useReadFragment } from "../../../shared/hooks/useReadFragment";
import { Entity } from "../../../shared/graphql/Admin/types";
import { CreateContainer } from "../Create/Styles";
import { useCleanData } from "../hooks/useCleanData";
import { useUpdateMutation } from "../hooks/useUpdateMutation";
import {
  foodItemFragment,
  menuFragment,
  sectionFragment,
} from "../Menus/Entities/fragments";

interface EditProps {
  type: Entity;
  fragmentType: string;
  id: number;
  fragmentid: number;
}

function Edit({ editProps }: { editProps?: EditProps }) {
  const state = useLocationState<EditProps>();
  const fragmentid = editProps ? editProps.fragmentid : state?.fragmentid;
  const fragmentType = editProps ? editProps.fragmentType : state?.fragmentType;
  const type = editProps ? editProps.type : state?.type;
  const id = editProps ? editProps.id : state?.id;

  const { value: mutationState, mergeState: mergeMutationState } =
    useMergeState();
  const navigate = useNavigate();
  const [data] = useReadFragment<MenuEntityFragment>(id, "Menu", menuFragment);
  const [existingData] = useReadFragment<
    MenuEntityFragment & FoodItemEntityFragment & SectionEntityFragment
  >(fragmentid, fragmentType, mapTypeToFragment(fragmentType));
  const { cleanedData } = useCleanData(data);
  const updater = useUpdateMutation(type);

  useEffect(() => {
    if (Object.keys(existingData).length == 0) return;
    var tmpExistingSections = [];
    var tmpExistingFoodItems = [];
    if (fragmentType === "Section") {
      for (const fooditem of existingData.fooditems) {
        tmpExistingFoodItems.push(fooditem.id);
      }
    } else if (fragmentType === "FoodItem") {
      for (const section of existingData!.sections) {
        tmpExistingSections.push(section.id);
      }
    }
    mergeMutationState({
      ...existingData,
      existingSections: tmpExistingSections,
      existingFoodItems: tmpExistingFoodItems,
    });
  }, [existingData, state, editProps]);

  const submitHandler = async () => {
    if (!checkRequiredFields(type as Entity, mutationState)) return;

    await updater(fragmentid, mutationState);
    navigate(`/admin/${fragmentType.toLowerCase()}s/${fragmentid}`);
  };

  return (
    <CreateContainer>
      {Object.keys(mutationState).length !== 0 ? (
        <Form
          submitHandler={submitHandler}
          entityComponents={EditTypes[type as Entity].components(
            mutationState,
            mergeMutationState,
            cleanedData
          )}
        />
      ) : (
        <Loading />
      )}
    </CreateContainer>
  );
}

export default Edit;

const mapTypeToFragment = (
  type: string
): ((id: string | number) => DocumentNode) => {
  const map: { [key: string]: (id: string | number) => DocumentNode } = {
    Menu: (id: string | number) => menuFragment(id),
    Section: (id: string | number) => sectionFragment(id),
    FoodItem: (id: string | number) => foodItemFragment(id),
  };

  return map[type];
};
