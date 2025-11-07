function TaskCounter({ total, completed, filter, visibleCount }) {
  let label = ''

  if (filter === 'all') {
    label = `${total} task${total === 1 ? '' : 's'} total`
  } else if (filter === 'active') {
    label = `${visibleCount} active`
  } else {
    label = `${visibleCount} completed`
  }

  return <p className="task-counter">{label}</p>
}

export default TaskCounter
