import Link from './Link';

export default function Pagination({ totalCount }) {
  const PER_PAGE = 12;

  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <div className='flex justify-center mt-10'>
      <ul className='flex items-center space-x-3'>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <li
            key={index}
            className='flex justify-center items-center w-8 h-8 text-gray-500 hover:text-white bg-white hover:bg-indigo-500 rounded-full border border-gray-300'
          >
            <Link href={`/blog/page/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
