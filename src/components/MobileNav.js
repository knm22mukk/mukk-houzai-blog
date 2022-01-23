import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClear } from 'react-icons/md';
import headerNavLinks from '../data/headerNavLinks';
import Link from './Link';

export default function MobileNav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className='sm:hidden'>
      <button
        type='button'
        className='m-2 w-10 h-10 text-3xl'
        area-label='ToggleMenu'
        onClick={handleClick}
      >
        {active ? <MdClear /> : <GiHamburgerMenu />}
      </button>
      <div
        className={`fixed w-full h-full top-32 right-0 bg-gray-200 opacity-95 z-10 transform ease-in-out duration-100 ${
          active ? 'block' : 'hidden'
        }`}
      >
        <button
          type='button'
          aria-label='toggle modal'
          className='fixed w-full h-full cursor-auto focus:outline-none'
          onClick={handleClick}
        ></button>
        <nav className='fixed mt-8 h-full'>
          {headerNavLinks.map((link) => (
            <div key={link.title} className='py-4 px-12'>
              <Link
                href={link.href}
                className='text-2xl font-bold tracking-widest'
                onClick={handleClick}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
