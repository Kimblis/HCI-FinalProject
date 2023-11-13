import CreateRestaurantModal from '@/components/restaurant/CreateRestaurantModal';
import RestaurantComponent from '@/components/restaurant/Restaurant';
import { useAuth } from '@/context/AuthContext';
import { firebaseDb } from '@/firebase';

import { SimpleGrid, Spinner } from '@chakra-ui/react';
import { collection, getDoc, getDocs, query, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const WorkoutsList = () => {
  const { currentUser } = useAuth();
  const columns = [1, 1, 2, 2, 3, 3];
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState<any[]>([])

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

  return (
    <div>
      {!isLoading ? (
        <SimpleGrid columns={columns} templateRows={'masonry'}>
          {restaurants.map((restaurant) => (
            <RestaurantComponent key={restaurant.id} restaurant={restaurant}></RestaurantComponent>
          ))}
          {currentUser?.id && <CreateRestaurantModal />}
        </SimpleGrid>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default WorkoutsList;
