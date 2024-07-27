import React from 'react';
import { handleDeleteTask } from '../../../service/ServiceTask';
import  "../CardTask/CardTask.css"
import { TaskContext } from '../../../contexto/TaskContext';
import { useContext } from 'react';

function CardTask({ task }) {

    const {fetchTask} =useContext(TaskContext)

    const deleteTask =(id)=>{
     handleDeleteTask(id).then(()=>fetchTask('http://localhost:3001/task'))
             
    }

    return (
        <div className="card-container">
            <h3 className="card-title">{task.title}</h3>
            <p className="card-description">{task.description}</p>
            <p className="card-status">Estado: {task.status}</p>
            <p className="card-date">{new Date(task.createdAt).toLocaleDateString()}</p>
            <div className="card-buttons">
                <button className="btn-edit" onClick={() => handleEditTask(task.id)}>Editar</button>
                <button className="btn-delete" onClick={() => deleteTask(task.id)}>Eliminar</button>

            </div>
            
        </div>
    );
}

export default CardTask;
