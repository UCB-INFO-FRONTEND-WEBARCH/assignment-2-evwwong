// src/components/TaskItem.jsx
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-row">
      <label className="task-item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? 'task-text completed' : 'task-text'}>
          {task.text}
        </span>
      </label>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </li>
  )
}

export default TaskItem
