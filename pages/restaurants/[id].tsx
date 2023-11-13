import { useAuth } from '@/context/AuthContext';
import { firebaseDb } from '@/firebase';
import {  User } from '@/types';
import { Box, Button, Divider, Grid, GridItem, Heading } from '@chakra-ui/react';
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


  return (
    <Box borderRadius="lg" shadow="lg" width="full" justifyContent="center">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%">
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
            <Box p="6">
              <Heading size="md" textAlign="center">
                Restaurant info:
              </Heading>
              <Divider orientation="horizontal" mb={3} />
              <Box>
                <Heading size="md">Title:</Heading>
                <Heading size="sm">{restaurant?.name || ''}</Heading>
              </Box>
            </Box>
          </Box>
        </GridItem>
       
       
      </Grid>
    </Box>
  );
};

export default Restaurant;
