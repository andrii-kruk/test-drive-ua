import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CatalogPage = lazy(() => import('pages/CatalogPage/CatalogPage'));
const FavoritePage = lazy(() => import('pages/FavoritePage/FavoritePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
};
