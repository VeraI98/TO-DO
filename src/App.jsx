import { useState } from 'react'
import TaskList from './components/TaskList'
import NewTaskForm from './components/NewTaskForm'
import Footer from './components/Footer'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Completed task',
      completed: true,
      editing: false,
      created: new Date(),
    },
    {
      id: 2,
      description: 'Editing task',
      completed: false,
      editing: false,
      created: new Date(),
    },
    {
      id: 3,
      description: 'Active task',
      completed: false,
      editing: false,
      created: new Date(),
    },
  ])

  // ✅ переключение completed
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  // ✅ удаление
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // ✅ включить режим редактирования
  const editTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, editing: true } : task
    ))
  }

  // ✅ сохранить новое название
  const updateTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, description: newText, editing: false }
        : task
    ))
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>

      <section className="main">
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          onEdit={editTask}
          onUpdate={updateTask}
        />
        <Footer />
      </section>
    </section>
  )
}

export default App