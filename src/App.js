import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: "ONE", state: true },
    { id: 2, title: "TWO", state: true },
    { id: 3, title: "THREE", state: true },
    { id: 4, title: "FOUR", state: true }
  ])

  const [form, setForm] = useState({ title: '' });

  const [formStatus, setFormStatus] = useState('Add');

  const [search, setSearch] = useState('');


  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (formStatus === 'Add') {
      setTodos([...todos, { id: Math.floor(Math.random * 1000), title: form.title, state: false }])
    } else {
      setTodos(todos.map(todo => todo.id === form.id ? form : todo))
    }
    setFormStatus('Add');
    setForm({ title: '' });
  }

  const handleUpdate = todo => {
    setForm(todo)
    setFormStatus('')
  }

  const handleSearch = e => {
    setSearch((e))
  }


  return (
    <div id="wrapper">

      <header>
        <div id="page-banner">
          <h1 className="title">ToDoList</h1>
          <p>What I want to do...</p>
          <form id="search-books">
            <input type="text" value={search} onChange={(e) => handleSearch(e.target.value)} placeholder="Search..." />
          </form>
        </div>
      </header>


      <div id="book-list">
        <ul>
        {todos.filter((todo => todo.title.toUpperCase().includes(search))).map((todo) => (
            <li key={todo.id}>
              <span className="name">{todo.title}</span>
              <span className="delete" onClick={() => handleDelete(todo.id)}>delete</span>
              <span className="delete" onClick={() => handleUpdate(todo)}>Update</span>
            </li>
          ))}
        </ul>
      </div>

      <form id="add-book" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Add todo..." name="title" value={form.title} />
        <button className="delete" type={"submit"}>{formStatus === 'Add' ? 'Submit' : 'Update'}</button>
      </form>

    </div>
  );
}

export default App;
