import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Create from "../pages/Admin/Create/Create";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Auth from "../pages/Admin/Helper/Auth";
import Wrapper from "../pages/Admin/Helper/Wrapper";
import Landing from "../pages/Customer/Landing/Landing";
import Verify from "../pages/Customer/Verify/Verify";
import Error from "../shared/components/Error/Error";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/fetch"
          element={
            <ProtectedRoute>
              <Wrapper />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/*" element={<Dashboard />} />
        <Route path="/token/:token" element={<Verify />} />
        <Route path="/order/*" element={<Landing />} />
        <Route path="/error/" element={<Error />} />
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
}

export default AppRouter;
