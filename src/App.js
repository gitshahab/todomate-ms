import { useEffect, useState } from "react"
import { Header,Footer, AddTask, ShowTask } from "./components"

export const App = () => {
  const [ taskList, setTasklist ] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [ task, setTask ] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList));
  }, [taskList]);
  
  return (
    <main className="dark:bg-bgR">
      <Header />
      <section className="min-h-screen">
        <AddTask taskList={taskList} setTasklist={setTasklist} task={task} setTask={setTask} />
        <ShowTask taskList={taskList} setTasklist={setTasklist} task={task} setTask={setTask} />
      </section>
      <Footer />
    </main>
  )
}

