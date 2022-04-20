import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  UseDisclosureReturn
} from '@chakra-ui/react'

interface ModalProps extends UseDisclosureReturn {

}

function Modal({
  isOpen,
  onClose
}: ModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et nam atque iste, non voluptatibus omnis deserunt a rem sunt necessitatibus esse assumenda magni dolorem unde eaque quos ut numquam.</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
  );
};

export default Modal;
