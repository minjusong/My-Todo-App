import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar.js'
import TodoList from './component/TodoList.js'
import TodoDetail from './component/TodoDetail.js'
import CreateTodo from './component/CreateTodo.js'
import Home from '/Users/minju/todo-app/src/page/Home.js'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/create" element={<CreateTodo/>} />
          <Route path="/todos/:id" element={<TodoDetail/>} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
