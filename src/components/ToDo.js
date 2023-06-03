import React from "react";
import ToDoItem from "./ToDoItem";

const ToDo = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filteredToDoList.map((toDo) => {
          return (
            <ToDoItem
              text={toDo.text}
              key={toDo.id}
              toDo={toDo}
              toDoList={props.toDoList}
              setToDoList={props.setToDoList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDo;
