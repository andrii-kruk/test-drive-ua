import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCars } from 'redux/cars/carsOperations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  return (
    <section>
      <h1>CatalogPage</h1>
    </section>
  );
};

export default CatalogPage;
