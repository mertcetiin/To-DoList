import { useState } from "react"

function Input() {

    const [todo, setTodo] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTodo = e.target.name.value;
        if (newTodo !== '') {
            setTodo([...todo, capitalizeFirstLetter(newTodo)])
        }
        e.target.name.value = '';
    };

    const onDelete = () => {
        setTodo([])
    }

    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <input name="name" />
                <div>
                    <ul>
                        {todo.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="buttons-container">
                    <button className="add" type='submit'>Add</button>
                    <button className="clear" onClick={onDelete}>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default Input;