import { Star } from '@/components/ratings/Star';
import { useAuth } from '@/context/AuthContext';
import { firebaseDb } from '@/firebase';
import {  User } from '@/types';
import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  Timestamp,
} from 'firebase/firestore';
import moment from 'moment';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const Restaurant: NextPage = () => {
  const [restaurant, setRestaurant] = useState<any | null>(null);
  const router = useRouter();
  const { currentUser } = useAuth();
  const { id: restaurantId } = router.query;

  const fetchRestaurantData = useCallback(async () => {
    const restaurantDoc = await getDoc(doc(firebaseDb, 'restaurants', restaurantId as string));
    const restaurantData = restaurantDoc?.data();
    if (restaurantData) {
      const id = restaurantId as string;
      setRestaurant({ ...restaurantData, id });
    }
  }, [restaurantId]);

  useEffect(() => {
    fetchRestaurantData();
  }, [fetchRestaurantData]);

  console.log(restaurant)
  return (
    <>{restaurant && <Box borderRadius="lg" shadow="lg" width="full" minHeight="80vh" justifyContent="center">
      <Box p="6">
              <Heading size="xl" textAlign="center">
                {restaurant.name || ''}
              </Heading>
              <Divider orientation="horizontal" mb={3} />
              <Box>
                {restaurant.price && <Text size="sm" pt="1">{`Price: ${[...Array(restaurant.price)].map(_ => '$').join()}`}</Text>}
                <Text fontSize="sm" pt="2">{restaurant?.description || ''}</Text>
              </Box>
               <Heading size="xl" textAlign="center" py='2'>
                Reviews
              </Heading>
              <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {restaurant.reviews?.length ? restaurant.reviews.map((review: any)=>  <GridItem w='100%' h='10'><Box background="#fff" padding="15px"><Stack>
                  <Text fontSize="lg">{review.author}</Text><Star rating={review.rating} /> <Text fontSize="sm">{review.review}</Text></Stack></Box></GridItem>) : <Text fontSize="lg">There are no reviews yet</Text>}
              </Grid>
            </Box>
          </Box>}</>
  );
};

export default Restaurant;
