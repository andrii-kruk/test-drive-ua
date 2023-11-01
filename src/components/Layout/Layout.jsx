import { Suspense } from 'react';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <main>
      <SideBar />
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Layout;
