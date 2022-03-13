export default function News() {
  return (
    <div className='justify-center py-5 text-center'>
      <h2 className='text-4xl font-bold tracking-tight leading-9'>更新情報</h2>
      <div className='justify-center'>
        <p className='p-6 mt-6 text-gray-500 bg-white rounded-md shadow-lg'>
          プライバシーポリシーを策定しました。
        </p>
        <p className='p-6 mt-6 text-gray-500 bg-white rounded-md shadow-lg'>
          パンくずリストを作成し、ページの構造が少しわかりやすくなりました。
        </p>
        <p className='p-6 mt-6 text-gray-500 bg-white rounded-md shadow-lg'>
          お問い合わせページを作成しました。
        </p>
      </div>
    </div>
  );
}
