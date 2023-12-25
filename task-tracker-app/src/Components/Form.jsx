import React, { useState } from 'react';
import { Button, Input } from '@chakra-ui/react';

const Form = ({ todos, setTodos }) => {
    const [task, setTask] = useState('');
    const handleChangeTask = (event) => {
        setTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (task === "") {
            alert("harap di isi");
            setTask("");
        } else {
            const newTodos = {
                id: todos.length+1,
                task: task,
                Complate : false
            };
            setTodos([...todos, newTodos]);
            setTask("");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input variant="filled" placeholder="add task here..." w="60%" mr="4" onChange={handleChangeTask} value={task} />
                <Button bgColor="orange.200" color="orange.500" type="submit">
                    Add
                </Button>
            </form>
        </>
    );
}

export default Form;
