import ProductList from 'components/ProductList/ProductList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'redux/cars/carsOperations';
import { selectCars } from 'redux/cars/carsSelectors';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (cars.length > 0) return;
    dispatch(getCars({}));
  }, [dispatch, cars]);
  return (
    <section>
      <h1>CatalogPage</h1>
      <ProductList items={cars} />
    </section>
  );
};

export default CatalogPage;
