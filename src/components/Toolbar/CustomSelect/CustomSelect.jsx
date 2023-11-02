import React, { useState } from 'react';
import {
  OptionItem,
  OptionsList,
  Select,
  SelectArrow,
  SelectContainer,
  Wrapper,
} from './CustomSelect.styled';

import sprite from 'assets/sprite.svg';

const CustomSelect = ({ options, onChange, text, size }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleSelect = event => {
    setIsOpen(!isOpen);
    if (!isOpen) return event.target.classList.add('open');
    event.target.classList.remove('open');
  };

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <>
      <Wrapper>
        <Select className={size}>
          <SelectContainer onClick={toggleSelect}>
            {selectedOption ? selectedOption : text}
            <SelectArrow width={20} height={20}>
              <use href={sprite + '#icon-arrow'}></use>
            </SelectArrow>
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
