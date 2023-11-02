import { useEffect, useState } from 'react';
import { getCars } from 'redux/cars/carsOperations';
import ProductItem from './ProductItem/ProductItem';
import { BtnLoadMore, List } from './ProductList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from 'redux/cars/carsSelectors';

const ProductList = () => {
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(12);
  const [page, setPage] = useState(1);

  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const onLoadMore = async event => {
    const btn = event.currentTarget;
    try {
      setPage(prevPage => prevPage + 1);

      const response = await dispatch(getCars({ page: page + 1 }));
      console.log('response: ', response);

      if (response.payload.length === 0)
        return btn.classList.add('visually-hidden');

      if (response.payload.length > 0 && response.payload.length < 12)
        return setVisible(prevValue => prevValue + response.payload.length);

      setVisible(prevValue => prevValue + 12);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cars.length > 0) return;

    dispatch(getCars({ page }));
  }, [dispatch, cars, page]);

  return (
    <>
      <List>
        {cars?.slice(0, visible).map(item => (
          <ProductItem item={item} key={item.id} />
        ))}
      </List>
      <BtnLoadMore type="button" onClick={onLoadMore}>
        {isLoading && 'Loading...'}
        {!isLoading && 'Load more'}
      </BtnLoadMore>
    </>
  );
};

export default ProductList;
