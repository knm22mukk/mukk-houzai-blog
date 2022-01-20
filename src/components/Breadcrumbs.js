import { FaChevronRight } from 'react-icons/fa';
import Link from './Link';

export default function BreadCrumbs({ lists }) {
  if (!lists) {
    return '';
  }

  return (
    <ol className='flex overflow-x-auto py-3 font-bold'>
      {lists.map(({ string, path }, index) => (
        <li className='flex overflow-x-auto items-center font-bold' key={index}>
          {lists.length - 1 !== index ? (
            <>
              <Link className='text-sm md:text-base underline' href={path}>
                {string}
              </Link>
              <FaChevronRight className='mx-2 text-sm md:text-base' />
            </>
          ) : (
            <span className='text-sm md:text-base'>{string}</span>
          )}
        </li>
      ))}
    </ol>
  );
}
