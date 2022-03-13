import BreadCrumbs from '../components/Breadcrumbs';
import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';
import Privacy from '../components/Privacy';

export default function PrivacyPolicy() {
  return (
    <>
      <MyHead title='むっく || プライバシーポリシー' />
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
      <PageTitle title='プライバシーポリシー' />
      <Privacy />
    </>
  );
}
