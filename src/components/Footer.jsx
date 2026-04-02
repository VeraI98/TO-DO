import TasksFilter from './TasksFilter'

function Footer({ setFilter, clearCompleted, activeCount }) {
    return (
        <footer className="footer">
        <span className="todo-count">
            {activeCount} items left
        </span>

        <TasksFilter setFilter={setFilter} />

        <button
            className="clear-completed"
            onClick={clearCompleted}
        >
            Clear completed
        </button>
        </footer>
    )
}

export default Footer