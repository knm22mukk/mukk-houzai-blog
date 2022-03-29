import Head from 'next/head';
import siteMetadata from '../data/siteMetadata';

export default function MyHead({
  pageTitle,
  pageDescription,
  pagePath,
  pageImage,
  pageImageWidth,
  pageImageHeight,
}) {
  const title = pageTitle ? pageTitle : siteMetadata.title;
  const description = pageDescription ? pageDescription : siteMetadata.description;
  const url = pagePath ? pagePath : siteMetadata.siteUrl;
  const imgUrl = pageImage ? pageImage : siteMetadata.image;
  const imgWidth = pageImageWidth ? pageImageWidth : 1200;
  const imgHeight = pageImageHeight ? pageImageHeight : 630;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={imgUrl} />{' '}
      <meta property='og:image:width' content={String(imgWidth)} />
      <meta property='og:image:height' content={String(imgHeight)} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@mukk_houzai' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={imgUrl} />
      <link rel='canonical' href={url} />
      <link rel='shortcut icon' href='/favicon.png' />
    </Head>
  );
}
