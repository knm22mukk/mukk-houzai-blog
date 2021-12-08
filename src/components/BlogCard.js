import Image from 'next/image';
import Button from './Button';
import Date from './Date';
import Link from './Link';

export default function BlogCard({ title, description, publishedAt, href, imageSrc }) {
  return (
    <Link href={href}>
      <div className='p-4 mx-auto mt-6 w-72 sm:w-64 md:w-56 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-100'>
        <div className=''>
          <Image src={imageSrc} width={300} height={300} alt={title} className='' />
          <div className='mt-4 text-center text-blue-500'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <p className='mt-2 text-gray-600'>{description}</p>
            <p className='mt-2 text-gray-600'>
              <Date dateString={publishedAt} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
