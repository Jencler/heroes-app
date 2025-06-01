import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../ui/pages/NotFoundPage";
import { HeroesRoutes } from "../heroes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { LandingPage } from "../landing/LandingPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoutes>
              <AuthRoutes />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />

        <Route path="404" element={<NotFoundPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </>
  );
};
