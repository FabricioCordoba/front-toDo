export const handleDeleteTask = async (id) => {  

    try {
        await fetch(`http://localhost:3001/task/${id}`, {
            method: 'DELETE',
        });
   
    } catch (error) {
        console.error('Error deleting task:', error);
    }
};
