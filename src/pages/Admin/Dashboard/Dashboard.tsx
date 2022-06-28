import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  FetchAllMenusDocument,
  FetchAllMenusQuery,
} from "../../../generated/graphql";
import Loading from "../../../shared/components/Loading/Loading";
import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import { AdminSidebarItems } from "../../../shared/components/Sidebar/SidebarItems";
import { QueryCache } from "../../../shared/graphql/Admin/types";
import { queryCache } from "../../../shared/graphql/Admin/gql";
import { useReadQuery } from "../../../shared/hooks/useReadQuery";
import { normaliseData } from "../../../shared/utils/normaliseData";
import Create from "../Create/Create";
import Edit from "../Edit/Edit";
import FoodItem from "../Menus/Entities/FoodItem";
import Menu from "../Menus/Entities/Menu";
import Section from "../Menus/Entities/Section";
import Overview from "../Menus/AllMenus";
import Bill from "../Service/Active/Bill/Bill";
import TableQR from "../Service/Active/Tables/TableQR";
import NewService from "../Service/Idle/NewService";
import Service from "../Service/Service";
import { DashboardBox } from "./Styles";

function Dashboard() {
  const [data, checked] = useReadQuery<QueryCache>(queryCache);
  const [fetched, setFetched] = useState<boolean>(false);
  const navigate = useNavigate();
  const [fetchedData, fetchedDataChecked, refetch] =
    useReadQuery<FetchAllMenusQuery>(FetchAllMenusDocument);
  const [expanded, setExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (!checked || !fetchedDataChecked) return;
    if (Object.keys(fetchedData).length === 0) {
      navigate("/fetch");
      return;
    }
    normaliseData(fetchedData);
    setFetched(true);
  }, [checked, fetchedDataChecked]);
  return (
    <>
      {fetched ? (
        <DashboardBox>
          <Sidebar
            expanded={expanded}
            setExpanded={setExpanded}
            sidebarItems={AdminSidebarItems}
          />
          <Routes>
            <Route path="create/:type" element={<Create />} />
            <Route path="edit" element={<Edit />} />
            <Route path="overview" element={<Overview />} />
            <Route path="menus/:menuid/*" element={<Menu />} />
            <Route path="sections/:sectionid" element={<Section />} />
            <Route path="fooditems/:fooditemid" element={<FoodItem />} />
            <Route path="summary" element={<p>summary</p>} />
            <Route path="service" element={<Service />} />
            <Route path="service/new" element={<NewService />} />
            <Route path="service/table/:token" element={<TableQR />} />
            <Route path="service/bill/:tableid" element={<Bill />} />
          </Routes>
        </DashboardBox>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Dashboard;
