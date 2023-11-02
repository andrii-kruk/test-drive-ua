import { useState } from 'react';
import { getCars } from 'redux/cars/carsOperations';
import ProductItem from './ProductItem/ProductItem';
import { BtnLoadMore, List } from './ProductList.styled';
import { useDispatch } from 'react-redux';

const ProductList = ({ items }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    dispatch(getCars({ page: page + 1 }));
  };

  return (
    <>
      <List>
        {items?.map(item => (
          <ProductItem item={item} key={item.id} />
        ))}
      </List>
      <BtnLoadMore type="button" onClick={onLoadMore}>
        LoadMore
      </BtnLoadMore>
    </>
  );
};

export default ProductList;
