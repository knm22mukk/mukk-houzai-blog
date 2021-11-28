import Image from 'next/image';
import Link from './Link';

export default function BlogCard({ title, description, publishedAt, href, imageSrc }) {
  return (
    <Link href={href}>
      <div className='p-4 mx-auto mt-6 w-72 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-110'>
        <div className=''>
          <Image src={imageSrc} width={300} height={300} alt={title} className='' />
          <div className='mt-4 text-center text-blue-500'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='mt-4 text-gray-600'>{description}</p>
            <p className='mt-4 text-gray-600'>{publishedAt}</p>
            <button className='py-2 px-14 mt-8 mb-4 tracking-widest text-white bg-blue-600 hover:bg-blue-500 rounded-full transition duration-200'>
              MORE
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
