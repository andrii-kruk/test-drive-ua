import ProductList from 'components/ProductList/ProductList';
import Toolbar from 'components/Toolbar/Toolbar';
import { PageContainer } from './FavoritePage.styled';

const FavoritePage = () => {
  return (
    <PageContainer>
      <Toolbar />
      <ProductList />
    </PageContainer>
  );
};

export default FavoritePage;
