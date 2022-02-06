import Image from 'next/image';
import BreadCrumbs from '../../components/Breadcrumbs';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Date from '../../components/Date';
import Link from '../../components/Link';
import MyHead from '../../components/MyHead';
import PageTitle from '../../components/PageTitle';
import { client } from '../../libs/client';

export default function BlogId({ blog }) {
  return (
    <Container>
      <MyHead
        title={`むっく || ${blog.title}`}
        description={blog.description}
        pageImage={blog.image.url}
      />
      <BreadCrumbs
        lists={[
          {
            string: 'トップページ',
            path: '/',
          },
          {
            string: 'ブログ記事一覧',
            path: '/blog',
          },
          {
            string: blog.title,
          },
        ]}
      />
      <PageTitle title={blog.title} />
      <p className='mb-3 text-sm text-center'>
        <Date dateString={blog.publishedAt} />
      </p>
      <div className='p-5 bg-white rounded-lg shadow-xl'>
        <div className='text-center'>
          <Image src={blog.image.url} width={400} height={400} alt={`${blog.title}イメージ`} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className='pt-10 prose'
        />
      </div>
      <div className='pt-10'>
        <Link href='/blog'>
          <Button title='一覧に戻る' />
        </Link>
      </div>
    </Container>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
