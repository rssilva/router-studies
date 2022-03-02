import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/posts">posts</NavLink>
    </div>
  );
};
