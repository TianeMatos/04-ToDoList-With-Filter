import { useState } from "react"
import "./FormCreateTask.css"

export default function FormCreateTask({ addTask }) {
  const [ taskName, setTaskName ] = useState("")
  const [ category, setCategory ] = useState("")
  const [ taskId, setTaskId ] = useState(1)

  const handleSubmit = (ev) => {
    ev.preventDefault()

    addTask(taskId, taskName, category)
    setTaskId(taskId + 1)
    setTaskName("")
    setCategory("")
  }

  return (
    <div className="formCreateTask">
      <h2>Criar Tarefa</h2>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <input type="text" id="taskName" name="taskName" value={taskName} onChange={(ev) => setTaskName(ev.target.value)} placeholder="Digite uma Tarefa..."/>
        <select name="category" id="category" value={category} onChange={(ev) => setCategory(ev.target.value)}>
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Estudo">Estudo</option>
          <option value="Casa">Casa</option>
          <option value="Pessoal">Pessoal</option>
        </select>
        <button>Criar Tarefa</button>
      </form>
    </div>

  )
}