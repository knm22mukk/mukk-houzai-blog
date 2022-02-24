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
            string: 'ブログ',
            path: '/blog/page/1',
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
      <article className='sm:py-10 px-2 md:px-6 xl:px-0 mx-auto max-w-xl md:max-w-2xl xl:max-w-3xl bg-white rounded-lg shadow-xl'>
        <div className='px-5 text-center'>
          <Image src={blog.image.url} width={1280} height={720} alt={`${blog.title}イメージ`} />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
          className='p-3 sm:p-10 prose'
        />
      </article>
      <div className='pt-10'>
        <Link href='/blog/page/1'>
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
