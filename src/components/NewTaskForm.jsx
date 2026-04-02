import { useState } from "react";

function NewTaskForm({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value.trim()) return;
        addTask(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        </form>
    );
}

export default NewTaskForm;