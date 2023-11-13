import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { Button, SimpleGrid, GridItem, Alert, AlertIcon, Heading, useBreakpointValue } from '@chakra-ui/react';

import TextField from '@/components/form/TextField';
import { firebaseDb } from '@/firebase';
import TextAreaField from '../form/TextAreaField';
import { useAuth } from '@/context/AuthContext';

const CreateRestaurantForm = ({ closeHandler }: { closeHandler: any }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const { currentUser } = useAuth();

  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        price: 0,
      }}
      validationSchema={yup.object({
        name: yup.string().required(),
        description: yup.string().optional(),
        price: yup.number().required(),
    
      })}
      onSubmit={async (restaurantData) => {
        try {
          setError('');
          setLoading(true);
          await addDoc(collection(firebaseDb, 'restaurants'), restaurantData);
        } catch (error) {
          console.warn(error);
          setError('Failed to create restaurant. Please try again later');
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
              <TextField name="price" label="Price" placeholder="Enter price range" isRequired={true} type="number" />
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
                Create restaurant
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

export default CreateRestaurantForm;
