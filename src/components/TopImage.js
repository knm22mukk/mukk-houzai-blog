import Image from 'next/image';
import Button from './Button';
import Container from './Container';
import Link from './Link';

export default function Header() {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div className='hidden sm:block'>
        <Image
          className='object-cover object-center md:relative mb-10 opacity-50'
          alt='hero'
          src='/images/moldimage1280x650.webp'
          height={650}
          width={1280}
        />
      </div>
      <div className='sm:hidden'>
        <Image
          className='object-cover object-center md:relative mb-10 opacity-50'
          alt='hero'
          src='/images/moldimage640x350.webp'
          height={350}
          width={640}
        />
      </div>
      <div className='md:absolute md:z-50 mt-10 w-full text-center md:text-white'>
        <Container>
          <h1 className='mb-4 text-4xl font-bold tracking-tight leading-9 md:leading-loose text-center'>
            MUKK BLOG
          </h1>
          <p className='mb-8 leading-relaxed'>
            包装資材、衛生資材、食器、洗剤など様々な商品情報などを発信していきます。
            <br />
            是非ゆっくり見ていってください。
            <br />
            SNSでも発信していきますので良ければフォローお願いします。
          </p>
          <Link href='/blog'>
            <Button title='記事一覧' className='hidden sm:block' />
          </Link>
        </Container>
      </div>
    </section>
  );
}
