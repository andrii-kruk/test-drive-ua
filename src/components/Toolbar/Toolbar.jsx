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

const Toolbar = () => {
  return (
    <ToolbarForm>
      <ToolbarContainer>
        <ToolbarGroup>
          <ToolbarLabel htmlFor="brand">Car brand</ToolbarLabel>
          <CustomSelect options={makes} text="Choose make" size="m" />
        </ToolbarGroup>

        <ToolbarGroup>
          <ToolbarLabel htmlFor="price">Price/ 1 hour</ToolbarLabel>
          <CustomSelect options={prices} text="To $" size="s" />
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

      <BtnText type="submit" size="s" text="Search" handleClick={() => {}} />
    </ToolbarForm>
  );
};

export default Toolbar;
