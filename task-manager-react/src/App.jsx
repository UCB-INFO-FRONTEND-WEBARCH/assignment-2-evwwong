import { useState } from 'react'
import TaskForm from './components/TaskForm.jsx'
import TaskCounter from './components/TaskCounter.jsx'
import TaskList from './components/TaskList.jsx'

import menuIcon from './assets/menu_icon.png'
import searchIcon from './assets/search_icon.png'
import checkIcon from './assets/check_icon.png'
import inboxIcon from './assets/inbox_icon.png'
import calendarIcon from './assets/calendar_icon.png'
import upcomingIcon from './assets/upcoming_icon.png'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Call Mom', completed: false },
    { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
    { id: 3, text: 'Return the textbook to Josie', completed: false },
    { id: 4, text: 'Buy the new album by Rake', completed: false },
    { id: 5, text: 'Buy a gift card for Dad', completed: false },
  ])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    setTasks((prev) => [...prev, { id: Date.now(), text, completed: false }])
  }

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const filteredTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.completed
    if (filter === 'completed') return t.completed
    return true
  })

  const total = tasks.length
  const completed = tasks.filter((t) => t.completed).length
  const visibleCount = filteredTasks.length

  return (
    <div className="page">
      {/* HEADER */}
      <header className="site-header">
        <button className="icon-button">
          <img src={menuIcon} alt="Menu" />
        </button>
        <label className="search-container">
          <img src={searchIcon} alt="" className="search-icon" />
          <input className="search-input" type="search" placeholder="Quick find" />
        </label>
        <div className="site-header_status">
          <img src={checkIcon} alt="Status" className="status-icon" />
          <span>{completed}/{total}</span>
        </div>
      </header>

      {/* MAIN */}
      <main className="site-main">
        {/* SIDEBAR */}
        <aside className="navbar">
          <ul>
            <li className="active">
              <div className="nav-item-content">
                <img src={inboxIcon} alt="" className="nav-icon" />
                <span>Inbox</span>
              </div>
              <span className="task-count">{total}</span>
            </li>
            <li>
              <div className="nav-item-content">
                <img src={calendarIcon} alt="" className="nav-icon" />
                <span>Today</span>
              </div>
              <span className="task-count">{total}</span>
            </li>
            <li>
              <div className="nav-item-content">
                <img src={upcomingIcon} alt="" className="nav-icon" />
                <span>Upcoming</span>
              </div>
            </li>
          </ul>
        </aside>

        {/* CONTENT */}
        <section className="main-content">
          <h1>Inbox</h1>

          <div className="filters">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          <TaskForm onAddTask={addTask} />

          <TaskCounter
            total={total}
            completed={completed}
            filter={filter}
            visibleCount={visibleCount}
          />

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </main>
    </div>
  )
}

export default App
