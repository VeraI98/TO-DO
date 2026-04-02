import { useState } from 'react'
import PropTypes from 'prop-types'

function NewTaskForm({ onAdd }) {
    const [text, setText] = useState('')

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && text.trim()) {
        onAdd(text)
        setText('')
        }
    }

    return (
        <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        />
    )
}

NewTaskForm.propTypes = {
    onAdd: PropTypes.func,
}

export default NewTaskForm