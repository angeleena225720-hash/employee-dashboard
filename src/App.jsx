import { Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./components/AppNavbar.jsx";
import Home from "./pages/Home.jsx";
import EmployeeForm from "./pages/EmployeeForm.jsx";

export default function App() {
  return (
    <>
      <AppNavbar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
