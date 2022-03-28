import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      area-label='ChangeThemeButton'
      type='button'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='text-3xl'
    >
      {mounted && <>{theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}</>}
    </button>
  );
};
