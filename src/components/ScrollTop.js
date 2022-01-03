import { useEffect, useState } from 'react';

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
      <svg className='w-5 h-5 text-white' viewBox='0 0 20 20' fill='currentColor'>
        <path
          fillRule='evenodd'
          d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
          clipRule='evenodd'
        />
      </svg>
    </button>
  );
};
