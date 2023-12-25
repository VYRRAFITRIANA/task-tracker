import React, { useEffect, useState } from "react";
import List from "../Components/List";
import Form from "../Components/Form";

import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [toggle, settoggle] = useState(false);
  const [render,setRender] = useState(todos)

  function handleDelete(id) {
    const hapus = todos.filter((todo) => Number(todo.id) !== Number(id));
    setTodos(hapus);
  }
  function handleUpdate(id) {
    const update = todos.map((todo) => {
      if (Number(todo.id) === Number(id)) {
        todo.Complate = true;
      }
      return todo;
    });
    setTodos(update);
  }

  function handleSeeAllTask() {
    settoggle(false);
  }
  
  function handleSeeComplate() {
    settoggle(true);
  }
  useEffect (()=>{
    if (toggle) {
        const complateTodos = todos.filter(todo => todo.Complate);
        setRender(complateTodos);
    }
    else{
        setRender(todos)
    }
   
  },[toggle,todos])
  
  return (
    <Box
      bg="white"
      h="80%"
      borderRadius="xl"
      shadow="xl"
      pb="4"
      w={{ base: "80%", md: "60%", lg: "60%" }}
    >
      <Flex direction="column" alignItems="center">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          color="orange.500"
          textAlign="center"
          mt="4"
        >
          Task Tracker
        </Text>
        <Divider
          w="50%"
          borderRadius="xl"
          borderWidth="medium"
          borderColor="orange.500"
          mt="2"
        ></Divider>
      </Flex>
      <Flex justify="center" mt="4">
        <Form todos={todos} setTodos={setTodos} />
      </Flex>
      <Flex
        mt="4"
        alignItems="center"
        direction="column"
        overflow="auto"
        height="60%"
        overflowX="hidden"
      >
        {render.map((todo) => {
          return (
            <List
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          );
        })}
      </Flex>
      <Flex justify={"center"}>
        {toggle ? (
          <Button onClick = {() => handleSeeAllTask()} bgColor={"gray.200"} color={"gray.600"}>
            See All Task
          </Button>
        ) : (
          <Button onClick={() => handleSeeComplate ()} bgColor={"green.200"} color={"green.600"}>
            See Completed On
          </Button>
        ) }
      </Flex>
    </Box>
  );
};

export default Home;
