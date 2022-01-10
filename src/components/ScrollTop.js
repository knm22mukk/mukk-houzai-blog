import { useEffect, useState } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

export const ScrollTop = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow);
    return () => {
      window.removeEventListener('scroll', scrollWindow);
    };
  }, []);

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    pointerEvents: 'none',
  };
  const activeStyle = {
    opacity: 1,
    transition: '0.5s',
  };
  const style = isButtonActive ? activeStyle : normalStyle;

  return (
    <button
      onClick={returnTop}
      className='fixed right-5 bottom-5 p-4 bg-indigo-500 rounded-full'
      style={style}
    >
      <FaAngleDoubleUp className='w-10 h-10 text-white' />
    </button>
  );
};
