import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../../ui/pages/NotFoundPage";

export const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
