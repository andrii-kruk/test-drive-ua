import { Button } from './BtnText.styled';

const BtnText = ({ type, handleClick, text, size }) => {
  return (
    <Button type={type} onClick={handleClick} className={size}>
      {text}
    </Button>
  );
};

export default BtnText;
