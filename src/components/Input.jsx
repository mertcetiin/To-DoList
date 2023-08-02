import { useState } from "react"
import Buttons from "./Buttons";

function Input() {

    const [todo, setTodo] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        const newTodo = e.target.name.value;
        if (newTodo !== '') {
            setTodo([...todo, newTodo])
        }
        e.target.name.value = '';
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" />
                <div>
                    <ul>
                        {todo.map((item, id) => (
                            <li key={id}>{item}</li>
                        ))}
                    </ul>
                    <Buttons />
                </div>
            </form>
        </div>
    )
}

export default Input;