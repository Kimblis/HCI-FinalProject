import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { deleteDoc, doc } from 'firebase/firestore';
import { Button, SimpleGrid, GridItem, Alert, AlertIcon } from '@chakra-ui/react';
import { firebaseDb } from '@/firebase';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/router';

const DeleteRestaurantForm = ({ closeHandler, restaurantId }: { closeHandler: any; restaurantId: string }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const router = useRouter();
  const restaurantRef = doc(firebaseDb, 'restaurants', restaurantId);
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        price: 0,
      }}
      validationSchema={yup.object({
        //TODO add validation
      })}
      onSubmit={async () => {
        try {
          setError('');
          setLoading(true);

          await deleteDoc(restaurantRef);
        } catch (error) {
          console.warn(error);
          setError('Failed to delete restaurant. Please try again later');
        }

        setLoading(false);
        closeHandler();
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={2}>
              <Button
                isLoading={loading}
                variant="primary"
                width="full"
                mt={4}
                type="submit"
                onClick={() => router.replace(`/workouts`)}
              >
                Delete workout
              </Button>
            </GridItem>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error}
              </Alert>
            )}
          </SimpleGrid>
        </form>
      )}
    </Formik>
  );
};

export default DeleteRestaurantForm;
