import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';
import { protectRoute } from '@/utils';
import { Spinner } from '@chakra-ui/react';

const Home: NextPage = () => {
  const { currentUser } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      router.replace('/login');
      return;
    }
  }, [currentUser, router]);

  useEffect(() => {
    protectRoute(currentUser as any, router);
    setLoading(false);
  }, [currentUser, router]);

  if (loading) {
    return <Spinner />;
  }

  if (!currentUser) {
    return <div>Guest</div>;
  }

  return <div>Hello world</div>;
};

export async function getServerSideProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default Home;
