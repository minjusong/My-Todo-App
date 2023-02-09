import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

const CreateTodo = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = { 
            id: nanoid(), 
            title: title, 
            body: body, 
        }
        const request = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newTodo),
        }
        fetch(`http://localhost:3001/todos`, request)
        .then(() => {
            navigate('/')
            window.location.reload()
            console.log(newTodo)
        })
        .catch(err => console.log(err))
       }

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>제목</label>
                <input type="text" 
                required value={title}
                onChange={(e)=> setTitle(e.target.value)}
                placeholder="제목을 입력해주세요."/>
                </div>
                <div>
                    <label>내용</label>
                <textarea 
                required value={body}
                onChange={(e)=> setBody(e.target.value)}
                placeholder="내용을 입력해주세요."
                />
                </div>
                <button>저장</button>
            </form>
        </div>
    )
}

export default CreateTodo;