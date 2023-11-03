import { Suspense } from 'react';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Main, PageContainer } from './Layout.styled';

const Layout = () => {
  return (
    <Main>
      <SideBar />
      <PageContainer>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </PageContainer>
    </Main>
  );
};

export default Layout;
