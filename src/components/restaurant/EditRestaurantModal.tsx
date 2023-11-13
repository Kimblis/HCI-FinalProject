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

import EditRestaurantForm from './EditRestaurantForm';

const EditRestaurantModal = ({ restaurant }: { restaurant: any }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser } = useAuth();
  return (
    <>
      <Box onClick={onOpen}>
        <Flex bgColor="green.300" w="full" justify="center">
          {currentUser ? (
            <Flex bgColor="green.300" w="60%" justifyContent="center">
              <Box> Edit </Box>
            </Flex>
          ) : null}
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit restaurant</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} px={10}>
            <EditRestaurantForm restaurant={restaurant} closeHandler={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditRestaurantModal;
