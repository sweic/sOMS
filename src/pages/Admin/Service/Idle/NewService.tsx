import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../../shared/components/Form/Form";
import Loading from "../../../../shared/components/Loading/Loading";
import { QueryCache } from "../../../../shared/graphql/Admin/types";
import { queryCache } from "../../../../shared/graphql/Admin/gql";
import { useMergeState } from "../../../../shared/hooks/useMergeState";
import { useReadQuery } from "../../../../shared/hooks/useReadQuery";
import { useServiceCreator } from "../../hooks/useService";
import {
  checkRequiredFields,
  initializeNewServiceComponents,
} from "./NewServiceComponents";
import { NewServiceContainer } from "./Styles";

function NewService() {
  const { value: mutationState, mergeState: mergeMutationState } =
    useMergeState();
  const [cleanData, setCleanData] = useState<any[]>([]);
  const [data, checked] = useReadQuery<QueryCache>(queryCache);

  useEffect(() => {
    if (!Object.keys(data).length) return;
    var tmpMenu: any[] = [];
    for (const menu of data.newMenus) {
      const newObj = Object.assign({}, menu, {
        label: menu.title,
        value: menu.id,
      });
      tmpMenu.push(newObj);
    }
    setCleanData(tmpMenu);
    mergeMutationState({ table: 1, date: new Date() });
  }, [data]);

  const navigate = useNavigate();
  const creator = useServiceCreator();
  const submitHandler = async () => {
    if (!checkRequiredFields(mutationState)) return;
    await creator(mutationState);
    navigate("/admin/service");
  };

  return (
    <NewServiceContainer>
      {Object.keys(mutationState).length !== 0 && checked ? (
        <>
          <Form
            submitHandler={submitHandler}
            entityComponents={initializeNewServiceComponents(
              mutationState,
              mergeMutationState,
              cleanData
            )}
          />
        </>
      ) : (
        <Loading />
      )}
    </NewServiceContainer>
  );
}

export default NewService;
