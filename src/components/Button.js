export default function Button({ title }) {
  return (
    <button className='py-2 sm:py-4 px-4 sm:px-10 text-xl lg:text-xl lg:font-bold text-white bg-indigo-500 hover:bg-indigo-600 rounded border-indigo-500 transition duration-150 ease-in-out'>
      {title}
    </button>
  );
}
