export default function Button({ title }) {
  return (
    <button className='py-2 sm:py-4 px-4 sm:px-10 text-sm lg:text-xl lg:font-bold text-white bg-indigo-700 hover:bg-indigo-600 rounded border border-indigo-700 transition duration-150 ease-in-out'>
      {title}
    </button>
  );
}
