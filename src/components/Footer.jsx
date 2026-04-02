import TasksFilter from './TasksFilter'
import PropTypes from 'prop-types'

function Footer({ count, filter, setFilter, onClear }) {
    return (
        <footer className="footer">
        <span className="todo-count">{count} items left</span>

        <TasksFilter filter={filter} setFilter={setFilter} />

        <button className="clear-completed" onClick={onClear}>
            Clear completed
        </button>
        </footer>
    )
}

Footer.propTypes = {
    count: PropTypes.number,
    filter: PropTypes.string,
    setFilter: PropTypes.func,
    onClear: PropTypes.func,
}

export default Footer