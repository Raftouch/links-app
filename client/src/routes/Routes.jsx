import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CreatePage } from "../pages/CreatePage";
import { LinksPage } from "../pages/LinksPage";
import { DetailsPage } from "../pages/DetailsPage";
import { AuthPage } from "../pages/AuthPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route exact path="/links" element={<LinksPage />} />
        <Route exact path="/create" element={<CreatePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/" element={<Navigate replace to="/create" />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route exact path="/" element={<AuthPage />} />
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  );
};
