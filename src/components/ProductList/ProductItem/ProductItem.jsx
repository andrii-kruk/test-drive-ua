import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from 'redux/cars/carsOperations';
import { selectFavorites } from 'redux/cars/carsSelectors';

import sprite from 'assets/sprite.svg';
import {
  Item,
  ItemBtnFavorite,
  ItemBtnLearnMore,
  ItemDescription,
  ItemIcon,
  ItemImg,
  ItemMainWrapper,
  ItemModel,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
} from './ProductItem.styled';

const ProductItem = ({ item }) => {
  const {
    img,
    model,
    make,
    year,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
    functionalities,
    id,
  } = item;

  const dispatch = useDispatch();

  const address = item.address.split(',');
  const favorites = useSelector(selectFavorites);

  const onFavoriteBtn = id => event => {
    const btn = event.currentTarget;

    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
      dispatch(deleteFavorite(id));
      return;
    }
    btn.classList.add('active');
    dispatch(addFavorite(id));
  };

  return (
    <Item>
      <ItemMainWrapper>
        <ItemImg src={img} alt={model} width={274} height={268} />
        <ItemWrapper>
          <ItemTitle>
            {make} <ItemModel>{model}</ItemModel>, {year}
          </ItemTitle>
          <ItemPrice>{rentalPrice}</ItemPrice>
        </ItemWrapper>
        <ItemDescription>
          {address[2]} | {address[1]} | {rentalCompany} | {type} | {model} |
          {mileage} | {functionalities[0]}
        </ItemDescription>
      </ItemMainWrapper>
      <ItemBtnFavorite
        type="button"
        aria-label="favorite button"
        onClick={onFavoriteBtn(id)}
        className={
          favorites.some(favorite => favorite.id === id) ? 'active' : ''
        }
      >
        <ItemIcon width={18} height={18}>
          <use href={sprite + '#icon-heart'}></use>
        </ItemIcon>
      </ItemBtnFavorite>
      <ItemBtnLearnMore type="button">Learn more</ItemBtnLearnMore>
    </Item>
  );
};

export default ProductItem;
