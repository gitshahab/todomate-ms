import React from 'react'

export const ShowTask = ({taskList, setTasklist, setTask}) => {

    const handleDelete = (id) => {
        const updatedTask = taskList.filter( todo => todo.id !== id );
        setTasklist(updatedTask);
    }

    const handleEdit = (id) => {
        const selectedTask = taskList.find( todo => todo.id === id );
        setTask(selectedTask);
    }

    return (
        <section className='rounded-md shadow-lg shadow-indigo-500/40 my-5 mx-5 md:mx-10 dark:bg-bgB'>
            <div className='flex justify-between '>
                <div className='flex justify-start items-center my-2 mx-2'>
                    <span className='font-semibold text-xl text-gray-950 dark:text-gray-200'>Todo</span>
                    <span className='mx-2 bg-gray-700 text-gray-100 p-1 rounded-full'>{String(taskList.length).padStart(2, "0")}</span>
                </div>
                <button onClick={ () => setTasklist([]) } className='mx-2 my-2 bg-blue-500 text-white font-semibold px-2 rounded hover:bg-blue-600'>Clear All</button>
            </div>
                <ul className='block md:m-4 p-1 md:p-4'>
                    {taskList.map((todo) => (
                        <li key={todo.id}>
                        <div className="block m-1 md:m-2 p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-bgH dark:border-gray-700 dark:hover:bg-gray-700 border-l-4 border-l-blue-700 dark:border-l-blue-400">
                            <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{todo.name}</h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">{todo.time}</p>
                            <div>
                                <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square text-gray-950 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 cursor-pointer"></i>
                                <i onClick={() => handleDelete(todo.id)} className="bi bi-trash text-gray-950 dark:text-gray-200 mx-2 hover:text-red-700 dark:hover:text-red-400 cursor-pointer"></i>
                            </div>
                        </div>
                        </li>
                    ))}
                </ul>
        </section>
    )
}
