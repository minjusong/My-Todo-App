import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TodoDetail = (todo) => {
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);

    const {id} = useParams();
    const request = {
        method : "GET",
        headers : {"Content-Type" : "application/json"},
    }
    fetch(`http://localhost:3000/todos/${id}`, request)
    .then(res => res.data)
    .catch(err => console.log(err))

const handleDeleteClick = () => {
    fetch(`http://localhost:3001/todos/${id}`, {
        method : "DELETE",
        headers : {"Content-Type" : "application/json"},
    })
    .then(() => {
        navigate('/')
        window.location.reload();
    })
    .catch(err => console.log(err))
}

return (
    <Container>
        <div>
            <input type='checkbox'/>
            <label>{todo.title}</label>
        </div>
    <li className="todo-details" id={ todo.id }>
        { todo && (<div>
            { todo.title }
            <button onClick={handleDeleteClick}>삭제</button>
        </div>
        )}
    </li>
    </Container>

)
}

export default TodoDetail;