import "./TaskCard.css"

export default function TaskCard({ task, completeTask, removetask }) {

  return (
    <div className="taskCard">
      <div className="content">
        <p className={task.isCompleted ? "completed" : "notCompleted"}>{task.text}</p>
        <p className={task.isCompleted ? "completed" : "notCompleted"}>{`(${task.category})`}</p>
      </div>
      <div className="buttons">
        <button onClick={() => completeTask(task.id)} disabled={task.isCompleted}>{task.isCompleted ? "Feito" : "Completar"}</button>
        <button onClick={() => removetask(task.id)}>X</button>
      </div>
    </div>
  )
}