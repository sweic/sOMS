import { Badge, Button, Tab, Tabs } from "@mantine/core";
import { useState } from "react";
import { Checks } from "tabler-icons-react";
import { FetchServiceQuery } from "../../../../generated/graphql";
import ConfirmModal from "../../../../shared/components/ConfirmModal/ConfirmModal";
import { convertTime } from "../../../../shared/utils/convertTime";
import { useEndService } from "../../hooks/useService";
import Orders from "./Orders/Orders";
import {
  ActiveServiceContainer,
  ActiveServiceContent,
  ActiveServiceHeadings,
} from "./Styles";
import ServiceTables from "./Tables/ServiceTables";

function ActiveService({ data }: { data: FetchServiceQuery }) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const terminator = useEndService();

  return (
    <ActiveServiceContainer>
      <ActiveServiceHeadings>
        <h1>Service</h1>
        <ConfirmModal
          confirmMessage="End the current service?"
          onConfirm={async () => {
            await terminator();
          }}
          renderLink={(modal) => (
            <Button rightIcon={<Checks />} onClick={() => modal.open()}>
              End Service
            </Button>
          )}
        />
        <Badge color="primary" variant="filled">
          LAST ORDER: {convertTime(data.service?.current?.lastOrder, true)}
        </Badge>
      </ActiveServiceHeadings>

      <Tabs onTabChange={(idx) => setActiveTab(idx)} variant="pills">
        <Tab label="Tables"></Tab>
        <Tab label="Kitchen Orders"></Tab>
      </Tabs>
      <ActiveServiceContent>
        {activeTab === 0 ? <ServiceTables /> : <Orders />}
      </ActiveServiceContent>
    </ActiveServiceContainer>
  );
}

export default ActiveService;
