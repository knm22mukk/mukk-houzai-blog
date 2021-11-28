export default function PageTitle({ title }) {
  return (
    <h1 className='py-10 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-9 sm:leading-10 md:leading-10 text-center text-gray-900'>
      {title}
    </h1>
  );
}
