import React from "react";
import PropTypes from "prop-types";
import * as sc from "../styled-components";
import styled from "styled-components";

const Todo = styled.div`
    display: flex;
    justify-content: space-between;
`

const TodoText = styled.p`

`

const TodoStatus = styled.input`

`

const TodoCard = ({ title, todos }) => {
    console.log(todos)
  return (
      <sc.CardLink to="/todos">
    <sc.Card>
      <sc.Title>{title}</sc.Title>
    <sc.Contents> 
      {todos.slice(0, 3).map(todo => (
          <Todo>
            <TodoText>{todo.todo}</TodoText>
            <TodoStatus 
            type="checkbox"
            disabled={true}
            checked={todo.completed}
            />
          </Todo>
      ))}
      </sc.Contents>
    </sc.Card>
    </sc.CardLink>
  );
};

TodoCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoCard;
