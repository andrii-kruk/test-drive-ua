import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite } from 'redux/cars/carsOperations';
import { selectFavorites } from 'redux/cars/carsSelectors';
import RentalModal from 'components/RentalModal/RentalModal';
import Modal from 'components/Modal/Modal';

import {
  Item,
  ItemDescription,
  ItemImg,
  ItemImgWrapper,
  ItemMainWrapper,
  ItemModel,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
} from './ProductItem.styled';

import BtnText from 'components/BtnText/BtnText';
import BtnIcon from 'components/BtnIcon/BtnIcon';
import { useState } from 'react';
import { splitString, toggleClass } from 'utils';

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

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const address = splitString(item.address, ',');

  const onFavoriteBtn = id => event => {
    const btn = event.currentTarget;

    if (btn.classList.contains('active')) {
      toggleClass(btn, 'active');
      dispatch(deleteFavorite(id));
      return;
    }
    toggleClass(btn, 'active');
    dispatch(addFavorite(id));
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Item>
        <ItemMainWrapper>
          <ItemImgWrapper>
            <ItemImg
              src={img}
              alt={model}
              width={274}
              height={268}
              loading="lazy"
            />
          </ItemImgWrapper>
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
        <BtnIcon
          type="button"
          size="s"
          aria="Button favorite"
          icon="#icon-heart"
          handleClick={onFavoriteBtn(id)}
          secondClass={
            favorites.some(favorite => favorite.id === id) ? 'active' : ''
          }
          w="18"
          h="18"
        />
        <BtnText
          type="button"
          size="l"
          text="Learn more"
          handleClick={toggleModal}
        />
      </Item>
      {isOpen && (
        <Modal
          closeFunction={toggleModal}
          children={<RentalModal content={item} />}
        />
      )}
    </>
  );
};

export default ProductItem;
