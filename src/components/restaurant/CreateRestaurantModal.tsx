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

import CreateRestaurantForm from './CreateRestaurantForm';

const CreateRestaurantModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box maxW="md" textAlign="center" borderWidth="1px" borderRadius="lg" overflow="hidden" m={2} onClick={onOpen}>
        <Box fontSize={100}>+</Box>
        <Box>Create new restaurant</Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create new restaurant</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} px={10}>
            <CreateRestaurantForm closeHandler={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateRestaurantModal;
