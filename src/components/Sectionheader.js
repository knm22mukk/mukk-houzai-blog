export default function SectionHeader({ title }) {
  return (
    <div className='py-5 my-5 bg-gray-100 dark:bg-gray-600 border-l-4 border-indigo-400'>
      <h2 className='px-3 text-2xl font-bold'>{title}</h2>
    </div>
  );
}
