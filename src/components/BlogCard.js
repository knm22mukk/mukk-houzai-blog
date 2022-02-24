import Image from 'next/image';
import Date from './Date';
import Link from './Link';

export default function BlogCard({ title, publishedAt, href, imageSrc }) {
  return (
    <Link href={href}>
      <div className='p-4 mx-auto mt-6 w-72 sm:w-64 md:w-56 bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-100'>
        <Image src={imageSrc} width={640} height={360} alt={title} />
        <div className='mt-4 text-center'>
          <h2 className='text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600'>
            {title}
          </h2>
          <p className='mt-2 text-gray-600'>
            <Date dateString={publishedAt} />
          </p>
        </div>
      </div>
    </Link>
  );
}
