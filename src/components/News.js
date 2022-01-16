import Container from './Container';

export default function News() {
  return (
    <Container>
      <div className='justify-center py-5 text-center'>
        <h2 className='py-10 text-4xl font-bold tracking-tight leading-9'>更新情報</h2>
        <div className='justify-center'>
          <p className='p-6 mt-6 text-gray-500 bg-white rounded-md shadow-lg'>
            ブログ記事を更新しました。「包装資材の値上げラッシュに関するお話。」
          </p>
          <p className='p-6 mt-6 text-gray-500 bg-white rounded-md shadow-lg'>
            ブログ記事を更新しました。「新年あけましておめでとうございます。」
          </p>
          <p className='p-6 mt-6 text-gray-500 bg-white rounded-md shadow-lg'>
            ブログ記事を更新しました。「素人がJAMstackで包材ブログを作ってみた！」
          </p>
        </div>
      </div>
    </Container>
  );
}
