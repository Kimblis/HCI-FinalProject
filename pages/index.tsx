import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useAuth } from '@/context/AuthContext';
import { protectRoute } from '@/utils';
import { SimpleGrid, Spinner } from '@chakra-ui/react';
import { collection, getDocs, query } from 'firebase/firestore';
import { firebaseDb } from '@/firebase';
import RestaurantComponent from '@/components/restaurant/Restaurant';
import CreateRestaurantModal from '@/components/restaurant/CreateRestaurantModal';

const Home: NextPage = () => {
  const { currentUser } = useAuth();
  const columns = [1, 1, 2, 2, 3, 3];
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<any[]>([])
  const router = useRouter();

   useEffect(() => {
    const getRestaurants = async () => {
      const restaurantsCollections = await getDocs(query(collection(firebaseDb, 'restaurants')));
      const restaurantDocs = restaurantsCollections.docs;
      await Promise.all(
        restaurantDocs.map(async (restaurantDoc) => {
          const restaurantData = restaurantDoc.data() as any;
          setRestaurants((currentValues) =>
            currentValues.some((currVal) => currVal.id === restaurantDoc.id)
              ? currentValues
              : [
                  ...currentValues,
                  {
                    ...restaurantData,
                    id: restaurantDoc.id,
                  },
                ]
          );
        })
      );
      setIsLoading(false);
    };

    getRestaurants();
  }, []);


  if (!currentUser) {
    return <div>Guest</div>;
  }

  return <div>{!isLoading ? (
        <SimpleGrid columns={columns} templateRows={'masonry'}>
          {restaurants.map((restaurant) => (
            <RestaurantComponent key={restaurant.id} restaurant={restaurant}></RestaurantComponent>
          ))}
          {currentUser?.id && <CreateRestaurantModal />}
        </SimpleGrid>
      ) : (
        <Spinner />
      )}</div>;
};

export async function getServerSideProps() {
  return {
    props: {
      protected: true,
    },
  };
}

export default Home;
