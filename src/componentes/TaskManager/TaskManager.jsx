
import React, { useState, useEffect } from "react";
import "../TaskManager/TaskManager.css"; 
import { TaskContext } from "../../contexto/TaskContext";
import { useContext } from "react"


const TaskManager = () => {
    const {fetchTask}= useContext(TaskContext)
  
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("Pendiente"); 
 

    const handleAddTask = async () => {
        const newTask = { title, description, status };
        console.log(newTask);
        try {
            await fetch('http://localhost:3001/task', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newTask),
            });
            setTitle('');
            setDescription('');
            setStatus('Pendiente');
            setShowModal(false);
            fetchTask('http://localhost:3001/task'); 
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await fetch(`http://localhost:3001/task/${id}`, {
                method: 'DELETE',
            });
            fetchTasks(); 
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

 

    return (
        <div className="task-manager">
            <button className="add-task-btn" onClick={() => setShowModal(true)}>
                Agregar Tarea
            </button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Crear Tarea</h2>
                        <input
                            type="text"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="Descripción"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="Pendiente">Pendiente</option>
                            <option value="Finalizado">Finalizado</option>
                        
                        </select>
                        <button onClick={handleAddTask}>Agregar</button>
                        <button onClick={() => setShowModal(false)}>Cancelar</button>
                    </div>
                </div>
            )}

        
        </div>
    );
};

export default TaskManager;
