import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <SideBar />
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
