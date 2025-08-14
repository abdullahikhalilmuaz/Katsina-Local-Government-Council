import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import StaffRecords from "./components/StaffRecords";
import FileTracking from "./components/FileTracking";
import Reports from "./components/Reports";
import FileForm from "./components/FileForm";
import LoadingPage from "./components/LoadingPage";
import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="main-content">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="content-area">
            <Routes>
              <Route path="/" element={<LoadingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/staff-records" element={<StaffRecords />} />
              <Route path="/file-tracking" element={<FileTracking />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/add-file" element={<FileForm />} />
              <Route path="/edit-file/:id" element={<FileForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
