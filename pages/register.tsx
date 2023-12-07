import type { NextPage } from 'next'

import RegisterForm from '@/components/authentication/RegisterForm'

const Register: NextPage = () => (
  <>
    <RegisterForm />
  </>
)

export async function getStaticProps() {
  return {
    props: {
      protected: false,
      authPage: true,
    },
  }
}

export default Register
