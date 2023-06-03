import React from "react";

const Form = (props) => {
  const inputTextHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    props.setToDoList([
      ...props.toDoList,
      { text: props.inputText, completed: false, id: Math.random() },
    ]);
    props.setInputText("");
  };

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={props.inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
      ></input>
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fa-regular fa-square-plus"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
