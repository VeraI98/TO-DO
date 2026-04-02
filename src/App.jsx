import { useState } from 'react'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'
import tasksData from './tasks' // если вынесешь JSON

function App() {
  const [tasks, setTasks] = useState(tasksData) // или твой массив
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


  const updateTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, description: newText, editing: false }
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


  const activeCount = tasks.filter(task => !task.completed).length

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTask={addTask} />
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
          setFilter={setFilter}
          clearCompleted={clearCompleted}
          activeCount={activeCount}
        />
      </section>
    </section>
  )
}

export default App