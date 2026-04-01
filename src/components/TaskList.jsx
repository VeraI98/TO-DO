import Task from './Task'

function TaskList({ tasks, onToggle, onDelete, onEdit, onUpdate }) {
    return (
        <ul className="todo-list">
        {tasks.map(task => (
            <Task
            key={task.id}
            {...task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            onUpdate={onUpdate}
            />
        ))}
        </ul>
    )
}

export default TaskList