import Image from 'next/image';

export default function PageTitle({ title }) {
  return (
    <div className='flex relative justify-center items-center'>
      <Image src='/images/banner1200x675.png' width={1200} height={320} alt='banner' />
      <h1 className='absolute text-3xl font-bold tracking-tight text-white'>{title}</h1>
    </div>
  );
}
