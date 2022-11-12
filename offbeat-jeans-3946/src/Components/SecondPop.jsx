import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";

export function SecondPopup() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text onClick={onOpen} bg="#EEEEEE" py={3}>
        <b>
          Shipping is delayed due to high demand. Need it sooner? Buy Online,
          Pick Up In Store or get Same-Day Delivery▸
        </b>
      </Text>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src="https://www.sephora.com/contentimages/2021-conv-hub-same-day-app-content-card-urgency-release-v2.jpg?imwidth=1056" />
          </ModalBody>
        </ModalContent>
        <ModalFooter></ModalFooter>
      </Modal>
    </>
  );
}
