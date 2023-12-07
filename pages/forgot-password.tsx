import type { NextPage } from 'next';

import ForgotPasswordForm from '@/components/authentication/ForgotPasswordForm';

const ForgotPassword: NextPage = () => (
  <>
    <ForgotPasswordForm />
  </>
);

export async function getStaticProps() {
  return {
    props: {
      protected: false,
      authPage: true,
    },
  };
}

export default ForgotPassword;
