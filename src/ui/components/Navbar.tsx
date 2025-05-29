import { NavLink, useNavigate } from "react-router-dom";
import { LogOut, Search } from "lucide-react";
import { Navlink } from "./NavLink";

export const Navbar = () => {
  const NAV_LINKS = [
    { path: "/marvel", label: "Marvel" },
    { path: "/dc", label: "DC" },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  const handleSearch = () => {
    navigate("/search", {
      replace: true,
    });
  };

  return (
    <div className="navbar__container">
      <NavLink className="logo" to="/">
        Heroes
      </NavLink>

      <nav className="nav">
        {NAV_LINKS.map((link) => (
          <Navlink key={link.label} {...link} />
        ))}
      </nav>

      <div className="navbar__right">
        <Search className="search__icon" onClick={handleSearch} size={18} color="#2e2e2e" />

        <button onClick={handleLogout} className="btn__auth">
          <LogOut size={18} color="#2e2e2e" />
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};
