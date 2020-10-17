import React from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import BookList from './components/BookList';

function App() {
  let state = {
    Todos: [{
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
    id: 2,
    title: 'Dinner with VC',
    completed: false
    },
    {
    id: 3,
    title: 'Meet with the suplier',
    completed: false
    }]
  }
  console.log(state.Todos)
  return (
    <div className="App">
      {/* <Header /> */}
      <BookList />
    </div>
  );
}

export default App;
