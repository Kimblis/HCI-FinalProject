import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { addDoc, arrayUnion, collection, doc, getDocs, query, updateDoc } from 'firebase/firestore';
import { Button, SimpleGrid, GridItem, Alert, AlertIcon, Heading, useBreakpointValue } from '@chakra-ui/react';

import TextField from '@/components/form/TextField';
import { firebaseDb } from '@/firebase';
import TextAreaField from '../form/TextAreaField';
import { useAuth } from '@/context/AuthContext';
import { Star } from '../ratings/Star';

const LeaveReviewForm = ({ closeHandler, restaurant }: { closeHandler: any, restaurant:any }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(0);
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  const { currentUser } = useAuth();
    const restaurantRef = doc(firebaseDb, 'restaurants', restaurant.id);

  return (
    <Formik
      initialValues={{
        review: '',
      }}
      validationSchema={yup.object({
        review: yup.string().optional(),
      })}
      onSubmit={async (reviewData) => {
        try {
          setError('');
          setLoading(true);
          await updateDoc(restaurantRef, {reviews: arrayUnion({...reviewData, rating, author: currentUser?.firstName})} as any);
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
              <Star rating={rating} onRatingSet={setRating} isInput={true}/>
            </GridItem>
            <GridItem colSpan={2}>
              <TextAreaField
                name="review"
                label="Review"
                placeholder="Leave a review"
                isRequired={false}
                type="string"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <Button isLoading={loading} variant="primary" width="full" mt={4} type="submit" disabled={!!rating}>
                Submit review
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

export default LeaveReviewForm;
