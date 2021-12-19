export default function Button({ title }) {
  return (
    <button className='py-2 px-8 my-2 tracking-widest text-white bg-blue-500 hover:bg-blue-700 rounded-lg transition'>
      {title}
    </button>
  );
}
