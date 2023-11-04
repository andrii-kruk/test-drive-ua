import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from 'redux/cars/carsOperations';
import { selectCars, selectIsLoading } from 'redux/cars/carsSelectors';
import BtnText from 'components/BtnText/BtnText';
import ProductItem from './ProductItem/ProductItem';

import { List } from './ProductList.styled';
import { toggleClassName } from 'utils';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      if (response.payload.length === 0) {
        toggleClassName(btn, 'visually-hidden');
        toast.info('At this moment, these are all the suggestions.', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        return;
      }

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
      <BtnText
        type="button"
        size="xs"
        text={isLoading ? 'Loading...' : 'Load more'}
        handleClick={onLoadMore}
      />
      <ToastContainer />
    </>
  );
};

export default ProductList;
