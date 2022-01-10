import Image from 'next/image';
import Button from './Button';

export default function Header() {
  return (
    <section className='flex flex-col justify-center items-center py-24'>
      <Image
        className='object-cover object-center mb-10 rounded opacity-70'
        alt='hero'
        src='/images/moldimage.webp'
        height={650}
        width={1280}
      />
      <div className='mt-10 w-full text-center'>
        <h1 className='mb-4 text-4xl font-bold tracking-tight leading-9 text-center'>MUKK BLOG</h1>
        <p className='mb-8 leading-relaxed text-gray-600'>
          包装資材、衛生資材、食器、洗剤など様々な商品情報などを発信していきます。
          <br />
          是非ゆっくり見ていってください。
          <br />
          SNSでも発信していきますので良ければフォローお願いします。
        </p>
        <Button title='記事一覧' />
      </div>
    </section>
  );
}
