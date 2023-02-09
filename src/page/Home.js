import React from "react";
import TodoDetail from "../component/TodoDetail";
import TodoList from "../component/TodoList";
import { Link } from "react-router-dom";

const Home = ({todo}) => {
    return (
        <div className="container">
            <body>
                {todo.map((list, index) => {return <TodoList key={index} todo={list}/>})}
                <Link to='/create'>
                    <button>게시글 작성</button>
                </Link>
            </body>
        </div>
    )
}

export default Home;