import { NavLink } from "react-router-dom";
interface Props {
  label: string;
  path: string;
}
export const Navlink = ({ label, path }: Props) => {
  return (
    <NavLink
      className={({ isActive }) => {
        return `navlink ${isActive && "link__active"}`;
      }}
      key={label}
      to={path}
    >
      {label}
    </NavLink>
  );
};
