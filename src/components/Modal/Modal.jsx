import BtnIcon from 'components/BtnIcon/BtnIcon';
import { useEffect } from 'react';
import { Backdrop, ModalContainer } from './Modal.styled';

const Modal = ({ closeFunction, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeFunction();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeFunction]);

  return (
    <Backdrop onClick={() => closeFunction()}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <div>
          <BtnIcon
            type="button"
            icon="#icon-close"
            size="l"
            aria="Close modal"
            w="24"
            h="24"
            handleClick={closeFunction}
          />
        </div>
        {children}
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
