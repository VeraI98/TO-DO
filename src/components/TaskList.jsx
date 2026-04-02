import Task from './Task'
import PropTypes from 'prop-types'

function TaskList(props) {
    const { tasks, ...rest } = props

    return (
        <ul className="todo-list">
        {tasks.map(task => (
            <Task key={task.id} {...task} {...rest} />
        ))}
        </ul>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array,
}

export default TaskList