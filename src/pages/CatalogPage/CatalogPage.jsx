import ProductList from 'components/ProductList/ProductList';
import Toolbar from 'components/Toolbar/Toolbar';
import { Section } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <Section>
      <Toolbar />
      <ProductList />
    </Section>
  );
};

export default CatalogPage;
