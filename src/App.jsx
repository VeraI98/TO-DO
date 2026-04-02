import { useState } from 'react'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      description: text,
      completed: false,
      editing: false,
      created: new Date(),
    }
    setTasks([newTask, ...tasks])
  }


  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }


  const editTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, editing: true } : task
    ))
  }

  const updateTask = (id, text) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, description: text, editing: false }
        : task
    ))
  }

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  const activeCount = tasks.filter(t => !t.completed).length

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAdd={addTask} />
      </header>

      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
          onUpdate={updateTask}
        />
        <Footer
          count={activeCount}
          filter={filter}
          setFilter={setFilter}
          onClear={clearCompleted}
        />
      </section>
    </section>
  )
}

export default App