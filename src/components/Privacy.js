export default function Privacy() {
  return (
    <div className='py-10 px-5 bg-white rounded-lg shadow-xl'>
      <h2 className='pl-3 my-5 text-2xl font-bold border-l-4 border-indigo-400'>
        個人情報の利用目的
      </h2>
      <p className='text-gray-600'>
        当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
        <br />
        取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
      </p>
      <h2 className='pl-3 my-5 text-2xl font-bold border-l-4 border-indigo-400'>
        アクセス解析ツールについて
      </h2>
      <p className='text-gray-600'>
        当ブログでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
        <br />
        このGoogleアナリティクスはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
      </p>
      <h2 className='pl-3 my-5 text-2xl font-bold border-l-4 border-indigo-400'>免責事項</h2>
      <p className='text-gray-600'>
        当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
        <br />
        また当ブログのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
        当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
      </p>
      <h2 className='pl-3 my-5 text-2xl font-bold border-l-4 border-indigo-400'>著作権について</h2>
      <p className='text-gray-600'>
        当ブログで掲載している文章や画像などにつきましては、無断転載することを禁止します。
        <br />
        当ブログは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
      </p>
      <h2 className='pl-3 my-5 text-2xl font-bold border-l-4 border-indigo-400'>リンクについて</h2>
      <p className='text-gray-600'>
        当ブログは基本的にリンクフリーです。リンクを行う場合の許可や連絡は不要です。
        ただし、インラインフレームの使用や画像の直リンクはご遠慮ください。
      </p>
    </div>
  );
}
