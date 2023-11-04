import {
  Navigation,
  NavigationLink,
  StyledSideBar,
} from './SideBar.styled';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import BtnIcon from 'components/BtnIcon/BtnIcon';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const asideClassName = isOpen ? 'open' : 'close';

  return (
    <StyledSideBar className={asideClassName}>
      <BtnIcon
        type="button"
        handleClick={handleOpen}
        children={<HiMenuAlt3 size={26} />}
        size="xl"
        aria="Open sidebar"
      />
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/catalog">Catalog</NavigationLink>
        <NavigationLink to="/favorites">Favorite</NavigationLink>
      </Navigation>
    </StyledSideBar>
  );
};

export default SideBar;
