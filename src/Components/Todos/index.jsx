import { useEffect, useState } from "react";
import { TodoItem } from "../TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { userOp, userSel } from "../../store/user";
import { auth } from "../../firebase";
import {  onAuthStateChanged} from "firebase/auth";
import './styles.css';
import { db } from "../../firebase";
import { doc, getDoc, getDocs, collection, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

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

  const changeTodoStatus = (td) => {
    dispatch(
      userOp.updateTodo(auth.currentUser.uid, td)
    )
  }

  useEffect(() => {
  getDocs(collection(db, "users",'userId', 'todosList')).then ((result) => console.log(result.docs))
    console.log(auth.currentUser.uid)
     dispatch(userOp.getTodosList(auth.currentUser.uid));
   }, [dispatch]);
  
   

  return    (
    
  <div className = 'todos-section'>
    {/* input section for adding new todos*/}
    <div className="addtodo-section">
    <input value={todoText} placeholder = "Add more todos!" onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={() => createTodo()}>Add</button>
    </div>
    
    {/* TodosList section: First, we should check if there are any todos and if not showcase the message that there are not any todos yet. */}
    
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