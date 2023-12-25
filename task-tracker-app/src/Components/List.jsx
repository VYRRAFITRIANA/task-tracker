import { HStack, IconButton, Spacer, Text } from '@chakra-ui/react';
import React from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';


const List = ({todo,handleDelete, handleUpdate}) => {

    return ( 
   <>
       
        <HStack  bgColor={todo.Complate?"green.200":"orange.200"} color={todo.Complate?"green.500":"orange.500"} w="90%" px={4} py={3} borderRadius="xl" my="1">
        <Text fontWeight="bold">{todo.task}</Text>
        <Spacer />
        <IconButton onClick ={() => {handleUpdate(todo.id)}}bgColor={"white"} icon={<FaCheck />} />
        <IconButton onClick={() => {handleDelete(todo.id)}} bgColor={"white"} icon={<FaTrash />}  />
      </HStack>
          
        </> 
     );
}
 
export default List;