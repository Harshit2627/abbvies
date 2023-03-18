import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/common/layout/mainLayout";
import { Home } from "../components/web/home";
import { AppRoutes } from "./routes";

export const Router = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<MainLayout />}>
      <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
