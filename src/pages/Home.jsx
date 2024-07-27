import { TaskContext } from "../contexto/TaskContext"
import CardTask from "../componentes/TaskManager/CardTask/CardTask"
import { useContext } from "react"
import TaskManager from "../componentes/TaskManager/TaskManager"



function Home(){
    const {tasks}= useContext(TaskContext)



    return(

        <>
        <div className="container-general-home">
            <h1>Listado de Tareas</h1>

            <TaskManager/>

            <div className="container-list-cardTask">
                {tasks.map(task=>(
                    <div className="container-cardTask" key={task.id}>
                        <CardTask task={task}/>
                    </div>

                ))}

            </div>


        </div>
        </>
    )
}

export default Home;