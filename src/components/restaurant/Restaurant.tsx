import { Box, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import EditRestaurantModal from './EditRestaurantModal';
import { useAuth } from '@/context/AuthContext';
import DeleteRestaurantModal from './DeleteRestaurantModal';
import { Star } from '../ratings/Star';

const RestaurantComponent = ({ restaurant }: { restaurant: any }) => {
  const router = useRouter();
  const { currentUser } = useAuth();

  const accRating = restaurant.reviews?.length ? restaurant.reviews.reduce((accumulator: number, curr: any) => accumulator + curr.rating,
  0) : null
  return currentUser && restaurant ? (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2}>
      <Box p="6" onClick={() => router.replace(`/restaurants/${restaurant.id}`)}>
        <Box mt="1" fontWeight="bold" as="h4" lineHeight="tight" noOfLines={1}>
          {restaurant.name}
        </Box>
        <Box>{restaurant.description}</Box>
        <Box>{`Price: ${[...Array(restaurant.price)].map(_ => '$').join(',')}`}</Box>
        {accRating !== null && <Box><Star rating={accRating / restaurant.reviews.length}/></Box>}
        
      </Box>
      {currentUser?.id && currentUser.id === restaurant.ownerId && (
        <>
          <Box pt={2}>
            <EditRestaurantModal restaurant={restaurant}></EditRestaurantModal>
          </Box>
          <Box pt={2}>
            <DeleteRestaurantModal restaurantId={restaurant.id}></DeleteRestaurantModal>
          </Box>
        </>
      )}
    </Box>
  ) : (
    <Heading>Something went wrong</Heading>
  );
};

export default RestaurantComponent;
