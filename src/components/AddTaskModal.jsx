import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Textarea, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

export default function AddTaskModal({id}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [taskDetails,setTaskDetails]=useState({
    title:"",
    description:"",
    time:""
  })
  const dispatch = useDispatch()
  return (
    <>
      <Button onClick={onOpen} color="black">
        Add a Task
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack gap="20px">
              <Input
                value={taskDetails.title}
                onChange={(e) => {
                  setTaskDetails({ ...taskDetails, title: e.target.value });
                }}
                type="text"
                placeholder="Add a task"
              />
              <Textarea
                value={taskDetails.description}
                onChange={(e) => {
                  setTaskDetails({
                    ...taskDetails,
                    description: e.target.value,
                  });
                }}
                type="text"
                placeholder="description"
              />
              <Input
                value={taskDetails.time}
                onChange={(e) => {
                  setTaskDetails({ ...taskDetails, time: e.target.value });
                }}
                type="number"
                placeholder="time spent(hours)"
              />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={()=>{
                const newTask={
                    title:taskDetails.title,
                    description:taskDetails.description,
                    time:+taskDetails.time
                }
                dispatch(addTask(id, newTask))
                onClose();

            }}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
