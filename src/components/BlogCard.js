import Image from 'next/image';
import Date from './Date';
import Link from './Link';

export default function BlogCard({ title, publishedAt, href, imageSrc }) {
  return (
    <Link href={href}>
      <div className='mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
        <Image src={imageSrc} width={640} height={360} alt={title} className='rounded-t-lg' />
        <div className='p-3'>
          <h4 className='mb-2 text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600'>
            {title}
          </h4>
          <p className='mt-2 text-gray-500'>
            <Date dateString={publishedAt} />
          </p>
        </div>
      </div>
    </Link>
  );
}
