import React, { createContext, useState, useEffect, useContext } from 'react';
import { task } from '../service/task';

export const TaskContext = createContext(task);

export const TaskProvider=({children})=>{

const [tasks, setTasks]= useState([])
const [endpoint, setEndpoint]= useState('http://localhost:3001/task')
    //const urlTask= 'http://localhost:3001/task';

    const fetchTask= async(endpoint)=>{
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            setTasks(data);
            console.log("data",data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchTask(endpoint);
    }, [endpoint]);

    return (
        <TaskContext.Provider value={{tasks, fetchTask, setEndpoint}}>
            {children}
        </TaskContext.Provider >
    )
}