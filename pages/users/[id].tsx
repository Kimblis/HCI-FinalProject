import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { doc, getDoc } from '@firebase/firestore';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Spinner } from '@chakra-ui/react';

import type {User } from '@/types';
import { firebaseDb } from '@/firebase';
import UserProfile from '@/components/user/Profile';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '@/context/AuthContext';

const User: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { currentUser } = useAuth();
  const userOwnsProfile = currentUser?.id === id;
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const data = await getDoc(doc(firebaseDb, 'users', id as string));
      const userData = data.data();
      if (!userData) {
        return userOwnsProfile ? router.replace('/login') : setError(true);
      }

      setUser({ ...userData, id } as User);
    };

   

    getUser();

  }, [id, router, userOwnsProfile]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Profile does not exist!</AlertTitle>
        <AlertDescription>Could not find the profile.</AlertDescription>
      </Alert>
    );
  }

  return <UserProfile user={user!} />; // user profile
  
};

export async function getServerSideProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default User;
