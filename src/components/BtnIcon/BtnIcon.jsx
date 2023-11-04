import sprite from 'assets/sprite.svg';
import { Button } from './BtnIcon.styled';

const BtnIcon = ({
  type,
  handleClick,
  icon,
  children,
  size,
  aria,
  secondClass = '',
  w,
  h,
}) => {
  return (
    <Button
      type={type}
      onClick={handleClick}
      className={`${size} ${secondClass}`}
      aria-label={aria}
    >
      {icon && (
        <svg width={w} height={h}>
          <use href={sprite + icon}></use>
        </svg>
      )}
      {children && children}
    </Button>
  );
};
export default BtnIcon;
