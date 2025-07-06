import { useState } from "react";
import FormCreateTask from "./components/FormCreateTask";
import TaskCard from "./components/TaskCard";
import Filter from "./components/Filter";
import Search from "./components/Search";

export default function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1555,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    { 
      id: 2222,
      text: "Ir para a academia", 
      category: "Pessoal", 
      isCompleted: false 
    },
    {
      id: 3354,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false
    },
  ]);

  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("Asc")
  const [search, setSearch] = useState("")

  const addTask = (taskId, taskName, category) => {
    const task = {
      id: taskId,
      text: taskName,
      category,
      isCompleted: false
    }
    setTaskList((prev) => {
      const newState = [...prev, task]
      return newState
    })
  }

  const removeTask = (taskId) => {
    const newTaskList = taskList.filter((t) => t.id !== taskId)
    setTaskList(newTaskList)
  }

  const completeTask = (taskId) => {
    const updatedTasks = taskList.map((task) => 
      task.id === taskId ? { ...task, isCompleted: true } : task
    )
    setTaskList(updatedTasks)
    console.log({taskList})
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="searchContainer">
        <h2>Pesquisar: </h2>
        <Search search={search} setSearch={setSearch} />
      </div>
      <hr />
      <div className="filterContainer">
        <h2>Filtrar:</h2>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      </div>
      <hr />
      <div className="taskListContainer">
        {taskList.length > 0 ? taskList.filter((task) => (
          filter === "All" 
          ? true 
          : filter === "Completed" 
          ? task.isCompleted 
          : !task.isCompleted
        )).filter((task) => (
          task.text.toLowerCase().includes(search.toLowerCase())
        )).sort((a, b) => (
          sort === "Asc" ? a.text.toUpperCase().localeCompare(b.text.toUpperCase())
                         : b.text.toUpperCase().localeCompare(a.text.toUpperCase())
        )).map((t, i) => (
          <TaskCard key={i} task={t} completeTask={completeTask} removetask={removeTask} />
        )) : <h2>Nenhuma Tarefa Encontrada!</h2>}
      </div>
      <hr />
      <div className="createTaskContainer">
        <FormCreateTask addTask={addTask} />
      </div>
    </div>
  )
}