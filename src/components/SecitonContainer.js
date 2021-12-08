export default function SectionContainer({ children }) {
  return (
    <div className='pb-10 bg-gray-100'>
      <div className='px-4 sm:px-6 xl:px-0 mx-auto max-w-3xl xl:max-w-5xl'>{children}</div>
    </div>
  );
}
