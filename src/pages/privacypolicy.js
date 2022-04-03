import BreadCrumbs from '../components/Breadcrumbs';
import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';
import Privacy from '../components/Privacy';
import siteMetadata from '../data/siteMetadata';

export default function PrivacyPolicy() {
  return (
    <>
      <MyHead
        pageTitle='むっく || プライバシーポリシー'
        pageDescription='包装資材営業マンむっく || プライバシーポリシー'
        pagePath={`${siteMetadata.siteUrl}/privacy`}
      />
      <PageTitle title='プライバシーポリシー' />
      <BreadCrumbs
        lists={[
          {
            string: 'トップページ',
            path: '/',
          },
          {
            string: 'プライバシーポリシー',
          },
        ]}
      />
      <Privacy />
    </>
  );
}
