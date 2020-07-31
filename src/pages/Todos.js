import React from "react";
import styled from "styled-components";
import * as styles from "../variables/styles";
import fetchJSON from "../utils/fetchJSON";
import * as origins from "../variables/origins";

/* todo (hehe):

a plus button at the bottom left, which, when clicked, sends a post request to the database, creating an empty todo, and then appending that todo to the list of frontend todos.

*/

const TodoPage = styled.main`
  max-width: ${styles.mediumPage};
  margin: 0 auto;
`;

const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid white;
`;

const TodoText = styled.input``;

const TodoStatus = styled.input``;

export const Todos = ({ todos, setTodos }) => {
  const [editTodoError, setEditTodoError] = React.useState("");

  const changeTodoStatus = (todo) => {
      setEditTodoError("")
    const newTodo = { ...todo, completed: !todo.completed };
    const endpoint = "/todos";
    fetchJSON({
      url: origins.backend + endpoint,
      method: "PUT",
      data: newTodo,
      token: true,
      noRes: true,
    })
      .then((res) => {
        setTodos(
          todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          })
        );
      })
      .catch((err) => {
        setEditTodoError(
          "Hmm, we had trouble contacting the server. Check back in a few minutes."
        );
      });
  };

  const editTodo = (e, todo) => {
    const newTodo = { ...todo, todo: e.target.value };
    setTodos(
      todos.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        }
        return todo;
      })
    );
  };

  const submitTodoEdit = (todo) => {
      setEditTodoError("")
    const endpoint = "/todos";
    fetchJSON({
      url: origins.backend + endpoint,
      method: "PUT",
      data: todo,
      token: true,
      noRes: true,
    }).catch((err) => {
      setEditTodoError(
        "Hmm, we had trouble contacting the server. Check back in a few minutes."
      );
    });
  };

  return (
    <TodoPage>
      <h1>Tasks</h1>
      {editTodoError}
      {todos.map((todo) => (
        <Todo>
          <TodoText
            type="text"
            onChange={(e) => editTodo(e, todo)}
            onBlur={() => submitTodoEdit(todo)}
            value={todo.todo}
          />
          <TodoStatus
            onClick={() => {
              changeTodoStatus(todo);
            }}
            type="checkbox"
            checked={todo.completed}
          />
        </Todo>
      ))}
    </TodoPage>
  );
};

