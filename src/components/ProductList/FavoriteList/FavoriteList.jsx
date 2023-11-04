import BtnText from 'components/BtnText/BtnText';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/favorites/favoritesSelectors';
import ProductItem from '../ProductItem/ProductItem';
import { List } from '../ProductList.styled';
import { Info } from './FavoriteList.styled';

const FavoriteList = () => {
  const [visible, setVisible] = useState(12);
  const [totalItems, setTotalItems] = useState(0);

  const favorites = useSelector(selectFavorites);

  const onLoadMore = () => {
    setVisible(visible + 12);
  };

  useEffect(() => {
    setTotalItems(favorites.length);
  }, [favorites]);

  return (
    <>
      {favorites.length === 0 && (
        <Info>You don't have any favorite listings yet.</Info>
      )}
      {favorites.length > 0 && (
        <>
          <List>
            {favorites?.slice(0, visible).map(item => (
              <ProductItem item={item} key={item.id} />
            ))}
          </List>
          {totalItems > visible && (
            <BtnText
              type="button"
              size="xs"
              text="Load more"
              handleClick={onLoadMore}
            />
          )}
        </>
      )}
    </>
  );
};

export default FavoriteList;
