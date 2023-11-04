import BtnText from 'components/BtnText/BtnText';
import CustomSelect from './CustomSelect/CustomSelect';
import {
  ToolbarInputFrom,
  ToolbarInputTo,
  ToolbarContainer,
  ToolbarForm,
  ToolbarGroup,
  ToolbarLabel,
} from './Toolbar.styled';

import makes from 'assets/makes.json';
import prices from 'assets/prices.json';
import { useState } from 'react';

const Toolbar = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const mileageFrom = event.target.elements.mileageFrom.value;
    const mileageTo = event.target.elements.mileageTo.value;

    const filters = {
      brand,
      price,
      mileageFrom,
      mileageTo,
    };
    return filters;
  };

  const getBrand = value => {
    setBrand(value);
  };

  const getPrice = value => {
    setPrice(value);
  };
  return (
    <ToolbarForm onSubmit={handleSubmit}>
      <ToolbarContainer>
        <ToolbarGroup>
          <ToolbarLabel>Car brand</ToolbarLabel>
          <CustomSelect
            options={makes}
            text="Choose make"
            size="m"
            onChange={getBrand}
          />
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarLabel>Price/ 1 hour</ToolbarLabel>
          <CustomSelect
            options={prices}
            text="To $"
            size="s"
            onChange={getPrice}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarLabel htmlFor="mileage">Car mileage / km</ToolbarLabel>
          <div>
            <ToolbarInputFrom
              type="number"
              name="mileageFrom"
              id="mileage"
              placeholder="From"
            />
            <ToolbarInputTo
              type="number"
              name="mileageTo"
              id="mileage"
              placeholder="To"
            />
          </div>
        </ToolbarGroup>
      </ToolbarContainer>

      <BtnText type="submit" size="s" text="Search" />
    </ToolbarForm>
  );
};

export default Toolbar;
