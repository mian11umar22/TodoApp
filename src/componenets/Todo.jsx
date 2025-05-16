import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import TodoItem from "./TodoItem";
import Footer from "./Footer";

export default function Todo() {
  const [Todos, settodos] = useState(() => {
   
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  });

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(Todos));
  }, [Todos]);

  const completedTodos = Todos.filter((todo) => todo.done).length;
  const totaltodo = Todos.length;

  return (
    <div>
      <Form Todos={Todos} settodos={settodos} />
      <TodoItem Todos={Todos} settodos={settodos} />
      <Footer completedTodos={completedTodos} totaltodo={totaltodo} />
    </div>
  );
}
