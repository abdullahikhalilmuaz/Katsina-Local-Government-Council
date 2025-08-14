import { Link } from "react-router-dom";
import coatOfArms from "../assets/coat-of-arms.png";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 18H21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <Link to="/dashboard" className="logo-container">
          <div className="coat-of-arms">
            <img
              src={coatOfArms}
              alt="Coat of Arms"
              className="logo"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          </div>
          <div className="header-titles">
            <h1 className="header-title">
              Katsina Local Government Council
              <span className="header-subtitle">
                Staff File Record Management System
              </span>
            </h1>
          </div>
        </Link>

        <div className="header-actions">
          <div className="user-profile">
            <span className="user-avatar">AD</span>
            <span className="user-name">Admin User</span>
          </div>
        </div>
      </div>
    </header>
  );
}
