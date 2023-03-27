import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleEdit } from "../redux/actions";

export default function EditModal({id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title,setTitle]=useState('')
  const dispatch=useDispatch()
  return (
    <>
      <Button onClick={onOpen}>
        <img src="https://img.icons8.com/ios-glyphs/30/null/edit-row.png" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="enter new title"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              onClick={() => {
                dispatch(handleEdit(id, title))
                onClose();
              }}
              variant="ghost"
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
