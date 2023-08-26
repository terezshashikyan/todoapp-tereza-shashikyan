import { useEffect, useState } from "react";
import { TodoItem } from "../TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { userOp, userSel } from "../../store/user";
import { auth } from "../../firebase";
import './styles.css';


export const Todos = () => {
  const dispatch = useDispatch();
  const todosList = useSelector(userSel.todosListSelector);
  const [todoText, setTodoText] = useState('');

  
  const createTodo = () => {
    if (todoText) {
      dispatch(
        userOp.createTodo(auth.currentUser.uid, {
          id: todoText,
          todoText,
          completed: false,
        })
      );
      setTodoText('');
    }
  };

  const deleteTodo = (todo) => {
    if (todo) {
      dispatch(
        userOp.deleteTodo(auth.currentUser.uid, todo)
      )
    }
  };

  useEffect(() => {
     dispatch(userOp.getTodosList(auth.currentUser.uid));
   }, [dispatch]);
  
   

  return    (
    
  <div className = 'todos-section'>

    {/* input section for adding new todos*/}
    <h1>Todos</h1>
    <h2>Organize your work and life, finally.</h2>
    <div className="addtodo-section">
    <input value={todoText} placeholder = "Add more todos!" onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={() => createTodo()}>Add</button>
    </div>
    
    {/* TodosList section: First, we should check if there are any todos.*/}
    <div className="todos-list">    
      {todosList?.map((todo) => (
        <div key = {todo.todoText}>
        <TodoItem todo={todo}  deleteTodo = {() => {deleteTodo(todo)}}/>
        </div>
      ))}
    </div> 

  </div>
   )
};