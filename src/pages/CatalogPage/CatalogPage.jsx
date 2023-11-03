import ProductList from 'components/ProductList/ProductList';
import Toolbar from 'components/Toolbar/Toolbar';
import { PageContainer } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <PageContainer>
      <Toolbar />
      <ProductList />
    </PageContainer>
  );
};

export default CatalogPage;
