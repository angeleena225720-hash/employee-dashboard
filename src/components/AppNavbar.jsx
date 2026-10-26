import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  const linkClass = ({ isActive }) => "nav-link" + (isActive ? " active fw-semibold" : "");

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Employee Dashboard</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/employee-form" className={linkClass}>
                Employee Form
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
