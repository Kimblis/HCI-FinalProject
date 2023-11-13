import { useAuth } from '@/context/AuthContext';
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
  Flex,
} from '@chakra-ui/react';
import DeleteRestaurantForm from './DeleteRestaurantForm';
import DeleteButton from './DeleteRestaurantForm';

const DeleteRestaurantModal = ({ restaurantId }: { restaurantId: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser } = useAuth();
  return (
    <>
      <Flex onClick={onOpen} bgColor="red.300" w="full" justify="center">
        {currentUser ? (
          <Flex bgColor="red.300" w="60%" justifyContent="center">
            <Box> Delete </Box>
          </Flex>
        ) : null}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure you want to delete this restaurant?</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} px={10}>
            <DeleteRestaurantForm restaurantId={restaurantId} closeHandler={undefined}></DeleteRestaurantForm>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteRestaurantModal;
