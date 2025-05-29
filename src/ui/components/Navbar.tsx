import { NavLink } from "react-router-dom";
import { User } from "lucide-react";

export const Navbar = () => {
  const navLinks = ["marvel", "dc"];

  return (
    <div className="navbar__container">
      <NavLink className="logo" to="/">
        Heroes
      </NavLink>
      <nav className="nav">
        {navLinks.map((link) => (
          <NavLink
            className={({ isActive }) => {
              return `navlink ${isActive && "link__active"}`;
            }}
            key={link}
            to={link}
          >
            {link}
          </NavLink>
        ))}
      </nav>
      <button className="btn__login">
        <User size={18} color="#2e2e2e" />
        Iniciar sesión
      </button>
    </div>
  );
};
