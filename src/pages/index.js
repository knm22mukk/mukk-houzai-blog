import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Link from '../components/Link';
import MyHead from '../components/MyHead';
import TopImage from '../components/TopImage';
import { client } from '../libs/client';

export default function Home({ blog }) {
  return (
    <div>
      <MyHead />
      <main>
        <TopImage />
        <div className='pt-6'>
          <h2 className='pl-3 text-3xl font-bold'>最新の記事</h2>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
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
        <div className='flex justify-end mt-2'>
          <Link href='/blog'>
            <Button title='ブログ一覧へ' />
          </Link>
        </div>
      </main>
    </div>
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
