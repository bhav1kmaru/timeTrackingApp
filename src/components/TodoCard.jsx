import { Button, Checkbox, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleChange, handleDelete } from '../redux/actions';
import AddTaskModal from './AddTaskModal';
import EditModal from './EditModal'

const TodoCard = ({title,status,id,tasks}) => {
const theme = useSelector((store) => store.theme);
const dispatch=useDispatch()

    const totalTime = (arr) => {
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i].time;
      }
      return sum;
    };


  return (
    <Stack>
      <Flex
        justifyContent={"space-around"}
        padding="10px"
        backgroundColor="#9E4784"
        color="white"
        borderRadius="15px"
        border="2px solid"
      >
        <Checkbox
          colorScheme="green"
          size="lg"
          onChange={() => {
            dispatch(handleChange(id));
          }}
          isChecked={status}
        >
          {title}
        </Checkbox>
        <Text>Total Time Spent:{tasks && totalTime(tasks)}     Hours</Text>
        <AddTaskModal id={id} />
        <EditModal id={id} />
        <Button onClick={() => dispatch(handleDelete(id))}>
          <img src="https://img.icons8.com/material-outlined/24/null/delete-forever.png" />
        </Button>
      </Flex>
      {/* <Flex gap='20px'>
        <Text>1.Learn xafafaf</Text>
        <Text>afhafajfafj</Text>
        <Text>3 hours</Text>
      </Flex> */}
      {tasks && tasks.map((task,i) => (
        <Flex justifyContent='space-between'>
          <Text>{`${i+1}. ${task.title}`}</Text>
          <Text>{`${task.description}`}</Text>
          <Text>{`Time Spent:${task.time} hours`}</Text>
        </Flex>
      ))}
    </Stack>
  );
}

export default TodoCard