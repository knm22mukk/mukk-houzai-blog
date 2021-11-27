import Link from 'next/link';
import { client } from '../libs/client';

export default function Blog({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href='/'>
        <a className='text-blue-600'>HOME</a>
      </Link>
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blog' });

  return {
    props: {
      blog: data.contents,
    },
  };
};
