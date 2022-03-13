import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Link from '../components/Link';
import MyHead from '../components/MyHead';
import News from '../components/News';
import TopImage from '../components/TopImage';
import { client } from '../libs/client';

export default function Home({ blog }) {
  return (
    <>
      <MyHead />
      <TopImage />
      <div className='p-5 my-10 bg-gray-100 rounded-lg'>
        <div className='py-10'>
          <h2 className='text-4xl font-bold tracking-tight leading-9 text-center'>最新記事</h2>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-3 xl:px-24'>
          {blog.map((blog) => (
            <BlogCard
              key={blog.id}
              imageSrc={blog.image.url}
              title={blog.title}
              description={blog.description}
              href={`/blog/${blog.id}`}
              publishedAt={blog.publishedAt}
            />
          ))}
        </div>
        <div className='flex justify-center mt-10'>
          <Link href='/blog/page/1'>
            <Button title='記事一覧' />
          </Link>
        </div>
      </div>
      <News />
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      limit: 3,
    },
  });

  return {
    props: {
      blog: data.contents,
    },
  };
};
