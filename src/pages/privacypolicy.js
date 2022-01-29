import BreadCrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import MyHead from '../components/MyHead';
import PageTitle from '../components/PageTitle';
import Privacy from '../components/Privacy';

export default function PrivacyPolicy() {
  return (
    <Container>
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
    </Container>
  );
}
