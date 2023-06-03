import React from "react";

const ToDoItem = (props) => {
  const deleteHandler = () => {
    props.setToDoList(props.toDoList.filter((el) => el.id !== props.toDo.id));
  };

  const completeHandler = () => {
    props.setToDoList(
      props.toDoList.map((item) => {
        if (item.id === props.toDo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${props.toDo.completed ? "completed" : ""}`}>
        {props.text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ToDoItem;
