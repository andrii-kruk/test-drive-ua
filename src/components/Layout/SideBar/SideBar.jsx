import { NavLink } from "react-router-dom";

const SideBar = () => {
  return <aside>
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/favorite">Favorite</NavLink>
    </nav>
  </aside>;
};

export default SideBar;
