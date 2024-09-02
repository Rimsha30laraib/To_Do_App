import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import { ToDos } from "./MyComponents/ToDos";
import { useState, useEffect } from 'react';
import AddToDo from "./MyComponents/AddToDo";
import About from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // Load todos from localStorage
  const initToDos = () => {
    let storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, todoState] = useState(initToDos);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const Add = (title, desc) => {
    console.log("Adding Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    todoState([...todos, myTodo]);
    console.log(myTodo);
  };

  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    // Filter out the todo to be deleted
    let newTodos = todos.filter((e) => {
      return e !== todo;
    });

    // Reassign serial numbers
    newTodos = newTodos.map((todo, index) => {
      return { ...todo, sno: index + 1 };
    });

    // Update state with the new list
    todoState(newTodos);
  };

  return (
    <Router>
      <Header title="MyToDoList" searchbar={true} />
      <Routes>
        <Route path="/" element={
          <>
            <AddToDo AddToDo={Add} />
            <ToDos todos={todos} onDelete={onDelete} />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
