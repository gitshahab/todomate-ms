import React from 'react'

export const AddTask = ({taskList, setTasklist, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const now = new Date();

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
    
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
    
        const formattedTime = `${hours}:${minutes} ${day}-${month}-${year}`;

        if (task.id) {
            const updateTask = taskList.map((todo) => (
                todo.id === task.id ? {
                    id: task.id,
                    name: task.name,
                    time: formattedTime
                } : todo 
            ));
            setTasklist(updateTask);
            e.target.task.value = "";
            setTask({});
        } else {
            const newTask = {
                id: now.getTime(),
                name: e.target.task.value,
                time: formattedTime
            }
            setTasklist([...taskList, newTask]);
            e.target.task.value = "";
            setTask({});
        }

    }

    return (
        <section className='mx-10 my-10'>
            <form onSubmit={handleSubmit} className='flex justify-center my-2 '>
                <input value={task.value} onChange={ e => setTask({...task, name: e.target.value})}  className='px-2 text-gray-700 dark:text-gray-100 dark:bg-bgR rounded border border-gray-900 dark:border-gray-100' type="text" name='task' autoComplete='off' placeholder={task.id ? 'update task' :'add task'} />
                <button type="submit" className='rounded bg-green-500 p-2 mx-2 font-semibold text-white hover:bg-green-600'>{ !task.id ? (<> <i className="bi bi-plus"></i> Add </>) : "Update"}</button>
            </form>
        </section>
    )
}
