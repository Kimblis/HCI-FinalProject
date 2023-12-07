import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from '@chakra-ui/react';

import LeaveReviewForm from './LeaveReviewForm';

const LeaveReviewModal = ({ restaurant }: { restaurant: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box textAlign="center" borderWidth="1px" borderRadius="lg" borderColor="green" overflow="hidden" onClick={onOpen}>
        <Box fontSize={30} color="green" >+</Box>
        <Box color="green">Leave review</Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Leave a review</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} px={10}>
            <LeaveReviewForm closeHandler={onClose} restaurant={restaurant}  />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LeaveReviewModal;
