import { Box, Button, Flex, Heading, Input, Stack, Switch, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted, handleAdd, handleChange, handleDelete, handleEdit, handleTheme } from '../redux/actions'
import { store } from '../redux/store'
import { ADD_TODO, CLEAR_COMPLETED, DELETE_TODO, EDIT_TODO, TOGGLE_THEME, UPDATE_TODO } from '../redux/types'
import TodoCard from './TodoCard'

const Todo = () => {
    const [todo,setTodo]=useState('')
    const dispatch=useDispatch()
    let todos=useSelector((store)=>store.todos)
    const theme=useSelector((store)=>store.theme)
    const [totalTime, setTotalTime] = useState(0);

    useEffect(()=>{
      let sum=0
      todos.forEach((todo)=>{
        if(todo.tasks.length>0){
          todo.tasks.forEach((task)=>{
            sum+=task.time
          })
        }
      })
      setTotalTime(sum)
    },[todos])
   
  return (
    <Stack
      gap="40px"
      w="60%"
      padding="40px"
      color={theme == "dark" ? "white" : "black"}
      border="1px solid"
      borderRadius="25px"
    >
      <Flex justifyContent={"space-between"}>
        <Heading>T I M E - T R A C K I N G 📝</Heading>
        <Flex>
          <Switch onChange={()=>{
            dispatch(handleTheme())
          }} size="md" />
          <Text fontSize="md">Dark Mode</Text>
        </Flex>
      </Flex>
      <Flex gap="20px" mt="40px">
        <Input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
            console.log(todo);
          }}
          type="text"
          placeholder="create a new project..."
        />
        <Button
          onClick={() => {
            dispatch(handleAdd(todo));
            setTodo('')
          }}
          color="black"
        >
          Add
        </Button>
      </Flex>

      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Active</Tab>
          <Tab>Completed</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Stack mt="50px" gap="20px">
              {todos.map((todo) => (
                <TodoCard
                  key={todo.id}
                  id={todo.id}
                  status={todo.status}
                  title={todo.title}
                  tasks={todo.tasks}
                 
                />
              ))}
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack mt="50px" gap="20px">
              {todos.map((todo) => {
                if (todo.status == false) {
                  return (
                    <TodoCard
                      key={todo.id}
                      id={todo.id}
                      status={todo.status}
                      title={todo.title}
                      tasks={todo.tasks}
                     
                    />
                  );
                }
              })}
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack mt="50px" gap="20px">
              {todos.map((todo) => {
                if (todo.status == true) {
                  return (
                    <TodoCard
                      key={todo.id}
                      id={todo.id}
                      status={todo.status}
                      title={todo.title}
                      tasks={todo.tasks}
                     
                    />
                  );
                }
              })}
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Flex justifyContent={"space-between"}>
        <Text fontSize="md">{todos.length} Items</Text>
        <Text fontSize='md'>Total Time Spent Today: {totalTime}  Hours</Text>
        <Button onClick={()=>dispatch(clearCompleted())} size="xs" color="black">
          Clear Completed
        </Button>
      </Flex>
    </Stack>
  );
}

export default Todo