 import {Button,Text, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure} from "@chakra-ui/react"
import { Link } from "react-router-dom"

 export function TopPopup() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Text onClick={onOpen} bg="#C0DCF1" py={4}>Beauty Insiders get FREE shipping on all orders. Exclusions/terms apply.† <b>LEARN MORE</b> </Text>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset='slideInBottom'
        
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Beauty Insiders get FREE shipping on all orders.</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            †We offer FREE Standard 1-3 Day Shipping on all US and Canada merchandise orders for Beauty Insider members, no minimum purchase required. Guest checkout orders receive FREE standard 1–3 day shipping with $50 minimum purchase. The standard shipping benefit is not valid on international shipping or on Kohls.com. You must check out with a valid Beauty Insider account to receive the standard shipping Benefit. Benefit has no cash value. No adjustments on previous purchases. Benefit is non-transferable. Benefit subject to change, alteration, or termination by Sephora in its sole discretion at any time.
            </ModalBody>
            
          </ModalContent>
        </Modal>
      </>
    )
  }