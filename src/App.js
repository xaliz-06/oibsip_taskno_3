import React, { useState, useEffect } from "react";
import "./App.css";
import FormComp from "./components/FormComp";
import ToDo from "./components/ToDo";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDoList, setFilteredToDoList] = useState([]);

  useEffect(() => {
    getLocalToDoList();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalToDoList();
  }, [toDoList, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredToDoList(toDoList.filter((toDo) => toDo.completed === true));
        break;
      case "uncompleted":
        setFilteredToDoList(
          toDoList.filter((toDo) => toDo.completed === false)
        );
        break;
      default:
        setFilteredToDoList(toDoList);
        break;
    }
  };

  const saveLocalToDoList = () => {
    if (toDoList.length > 0) {
      localStorage.setItem("toDoList", JSON.stringify(toDoList));
    }
  };

  const getLocalToDoList = () => {
    if (localStorage.getItem("toDoList") === null) {
      localStorage.setItem("toDoList", JSON.stringify([]));
    } else {
      let toDoLocal = JSON.parse(localStorage.getItem("toDoList"));
      console.log(toDoLocal);
      setToDoList(toDoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <FormComp
        inputText={inputText}
        toDoList={toDoList}
        setToDoList={setToDoList}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDo
        toDoList={toDoList}
        filteredToDoList={filteredToDoList}
        setToDoList={setToDoList}
      />
    </div>
  );
}

export default App;
