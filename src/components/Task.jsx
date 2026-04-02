import { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

function Task({
    id,
    description,
    completed,
    editing,
    created,
    onToggle,
    onDelete,
    onEdit,
    onUpdate,
}) {
    const [value, setValue] = useState(description)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
        onUpdate(id, value)
        }
    }

    return (
        <li className={`${completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
        <div className="view">
            <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(id)}
            />

            <label>
            <span className="description">{description}</span>
            <span className="created">
                created {formatDistanceToNow(new Date(created), { addSuffix: true })}
            </span>
            </label>

            <button className="icon icon-edit" onClick={() => onEdit(id)}></button>
            <button className="icon icon-destroy" onClick={() => onDelete(id)}></button>
        </div>

        {editing && (
            <input
            className="edit"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            />
        )}
        </li>
    )
}

Task.propTypes = {
    id: PropTypes.number,
    description: PropTypes.string,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    created: PropTypes.any,
    onToggle: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onUpdate: PropTypes.func,
}

export default Task