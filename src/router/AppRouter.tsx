import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../ui";
import { NotFoundPage } from "../ui/pages/NotFoundPage";
import { DcPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="marvel" />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="404" />} />
        <Route path="404" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
