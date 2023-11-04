import React, { useState } from 'react';
import {
  OptionItem,
  OptionsList,
  Select,
  SelectContainer,
  Wrapper,
} from './CustomSelect.styled';

import BtnIcon from 'components/BtnIcon/BtnIcon';
import { toggleClass } from 'utils';

const CustomSelect = ({ options, onChange, text, size }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSelect = event => {
    setIsOpen(!isOpen);
    toggleClass(event.currentTarget, 'open');
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <>
      <Wrapper>
        <Select className={size}>
          <SelectContainer onClick={toggleSelect}>
            {selectedOption ? selectedOption : text}
            <BtnIcon
              type="button"
              size="m"
              w="20"
              h="20"
              handleClick={toggleSelect}
              icon="#icon-arrow"
              aria="Open dropdown"
              secondClass={isOpen ? 'open' : ''}
            />
          </SelectContainer>
        </Select>
        {isOpen && (
          <OptionsList className={size}>
            {options.map(option => (
              <OptionItem
                key={option}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </OptionItem>
            ))}
          </OptionsList>
        )}
      </Wrapper>
    </>
  );
};

export default CustomSelect;
