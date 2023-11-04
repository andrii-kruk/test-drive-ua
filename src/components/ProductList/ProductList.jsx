import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import {
  selectCars,
  selectFavorites,
  selectIsLoading,
} from 'redux/cars/carsSelectors';
import { getCars } from 'redux/cars/carsOperations';

import BtnText from 'components/BtnText/BtnText';
import ProductItem from './ProductItem/ProductItem';

import { List } from './ProductList.styled';

const ProductList = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log('location: ', location.pathname);

  const [visible, setVisible] = useState(12);
  const [page, setPage] = useState(1);

  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const onLoadMore = async event => {
    const btn = event.currentTarget;
    try {
      setPage(prevPage => prevPage + 1);

      const response = await dispatch(getCars({ page: page + 1 }));

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
        {location.pathname === '/favorites' && favorites.length === 0 && (
          <h2>You don't have any favorite listings yet.</h2>
        )}

        {location.pathname === '/favorites' &&
          favorites
            ?.slice(0, visible)
            .map(item => <ProductItem item={item} key={item.id} />)}

        {location.pathname === '/catalog' &&
          cars
            ?.slice(0, visible)
            .map(item => <ProductItem item={item} key={item.id} />)}
      </List>
      {location.pathname === '/favorites' && favorites.length >= 12 && (
        <BtnText
          type="button"
          size="xs"
          text={isLoading ? 'Loading...' : 'Load more'}
          handleClick={onLoadMore}
        />
      )}

      {location.pathname === '/catalog' && cars.length >= 12 && (
        <BtnText
          type="button"
          size="xs"
          text={isLoading ? 'Loading...' : 'Load more'}
          handleClick={onLoadMore}
        />
      )}
    </>
  );
};

export default ProductList;
