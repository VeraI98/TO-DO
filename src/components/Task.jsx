import { useState } from 'react'

function Task({
    id,
    description,
    completed,
    editing,
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
            <span className="created">created just now</span>
            </label>

            <button
            className="icon icon-edit"
            onClick={() => onEdit(id)}
            ></button>

            <button
            className="icon icon-destroy"
            onClick={() => onDelete(id)}
            ></button>
        </div>

        {editing && (
            <input
            type="text"
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

export default Task