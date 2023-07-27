import { Routes, Route } from "react-router-dom";
import AboutPage from "../page/About";
import HomePage from "../page/Home";
import Layout from "../component/Layout";
import Login from "../component/login";
import Todo from "../component/Todo";
import { useState } from "react";
import Candidate from "../page/Candidate";
import CandidateLayout from "../component/CandidateLayout";
import ProtectedRoutes from "./ProtectedRoute";
import PublicRoutes from "./PublicRoute";
import AdminDashLayout from "../component/AdminDashLayout";
import AdminPanel from "../page/AdminPanel";
const MainRoute = () => {
  const [role, setRole] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login role={role} setRole={setRole} />
            </PublicRoutes>
          }
        />

        <Route
          element={
            <ProtectedRoutes>
              <CandidateLayout />
            </ProtectedRoutes>
          }
        >
          <Route path="/candidate" element={<Candidate />} />
        </Route>
        <Route element={<ProtectedRoutes><AdminDashLayout /></ProtectedRoutes>}>
          <Route path="/admin-dashboard" element={<AdminPanel />} />
        </Route>
        <Route
          element={
            <PublicRoutes>
              <Layout />
            </PublicRoutes>
          }
        >
          <Route path="" element={<HomePage role={role} setRole={setRole} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
