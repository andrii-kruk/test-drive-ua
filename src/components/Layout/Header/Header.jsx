import { useLocation } from 'react-router';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      {location.pathname === '/' && <h2>Home</h2>}
      {location.pathname === '/catalog' && <h2>Catalog</h2>}
      {location.pathname === '/favorites' && <h2>Favorites</h2>}
    </header>
  );
};

export default Header;
