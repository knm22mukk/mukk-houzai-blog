import LatestBlog from '../components/LatestBlog';
import MyHead from '../components/MyHead';
import TopImage from '../components/TopImage';
import { client } from '../libs/client';

export default function Home({ blog }) {
  return (
    <div>
      <MyHead />
      <main>
        <TopImage />
        <div className='p-6'>
          <h2 className='text-3xl font-bold text-center'>最新の記事</h2>
        </div>
        {blog.map((blog) => (
          <LatestBlog
            key={blog.id}
            title={blog.title}
            description={blog.description}
            href={`/blog/${blog.id}`}
            publishedAt={blog.publishedAt}
          />
        ))}
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
