import Date from './Date';
import Link from './Link';

export default function LatestBlog({ title, description, publishedAt, href }) {
  return (
    <div className='py-3 text-center border-b-2'>
      <p className='mb-2 text-xs font-semibold tracking-wide text-gray-500'>
        <Date dateString={publishedAt} />
      </p>
      <Link href={href}>
        <h2 className='mb-4 font-sans text-3xl sm:text-2xl font-bold tracking-tight sm:leading-none'>
          {title}
        </h2>
      </Link>
      <p className='text-base md:text-lg'>{description}</p>
    </div>
  );
}
