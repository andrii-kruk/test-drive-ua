import Toolbar from 'components/Toolbar/Toolbar';
import { PageContainer } from './FavoritePage.styled';
import FavoriteList from 'components/ProductList/FavoriteList/FavoriteList';

const FavoritePage = () => {
  return (
    <PageContainer>
      <Toolbar />
      <FavoriteList />
    </PageContainer>
  );
};

export default FavoritePage;
