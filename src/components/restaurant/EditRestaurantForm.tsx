import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { doc, updateDoc } from 'firebase/firestore';
import { Button, SimpleGrid, GridItem, Alert, AlertIcon, useBreakpointValue } from '@chakra-ui/react';

import TextField from '@/components/form/TextField';
import { firebaseDb } from '@/firebase';
import TextAreaField from '../form/TextAreaField';

const EditRestaurantForm = ({ closeHandler, restaurant }: { closeHandler: any; restaurant: any }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const restaurantRef = doc(firebaseDb, 'restaurants', restaurant.id);

  return (
    <Formik
      initialValues={{
        name: restaurant.name,
        description: restaurant.description,
        price: restaurant.price,
      }}
      validationSchema={yup.object({
        name: yup.string().required(),
        description: yup.string().optional(),
        price: yup.number().required(),
      })}
      onSubmit={async ({ ...resData }) => {
        try {
          setError('');
          setLoading(true);

          await updateDoc(restaurantRef, resData as any);
        } catch (error) {
          console.warn(error);
          setError('Failed to update restaurant. Please try again later');
        }

        setLoading(false);
        closeHandler();
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={colSpan}>
              <TextField name="name" label="Name" placeholder="Enter restaurant name" isRequired={true} type="string" />
            </GridItem>
            <GridItem colSpan={colSpan}>
              <TextField name="price" label="Price" placeholder="Enter restaurant price" isRequired={true} type="number" />
            </GridItem>
            <GridItem colSpan={2}>
              <TextAreaField
                name="description"
                label="Description"
                placeholder="Describe your restaurant"
                isRequired={true}
                type="string"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Button isLoading={loading} variant="primary" width="full" mt={4} type="submit">
                Edit workout
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

export default EditRestaurantForm;
