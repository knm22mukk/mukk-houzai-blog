export default function Button({ title }) {
  return (
    <button className='py-4 px-10 text-xl font-bold text-white bg-gradient-to-r from-blue-400 hover:from-indigo-500 to-indigo-500 hover:to-blue-400 rounded border-indigo-500 transition duration-150 ease-in-out'>
      {title}
    </button>
  );
}
