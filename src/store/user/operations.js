import {  setTodosList, userSlice } from "./userSlice";
import { db } from "../../firebase";
import { doc, getDoc, getDocs, collection, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";


const getTodosList = (userId)  => {
  return async (dispatch) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userRef);
    const userData = userSnapshot.data().todosList;
    const todos = await Promise.all(
      userData?.map(async (todo) => {return todo})
    );
    dispatch (setTodosList(todos)); 
  } 
  
  catch (error) {
    console.log(error);
  }
}
}

const createTodo = (userId, newTodo) => {
  return async (dispatch) => {
    const { createTodo} = userSlice.actions;

    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        todosList: arrayUnion(newTodo)
      })

      dispatch(createTodo(newTodo));
    } catch (error) {
      console.log(error);
    }
  };
};

const deleteTodo = (userId, deletedTodo) => {
  return async (dispatch) => {
    const { deleteTodo} = userSlice.actions;

    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        todosList: arrayUnion(deletedTodo)
      })

      dispatch(deleteTodo(deletedTodo));
    } catch (error) {
      console.log(error);
    }
  };
};


export const userOp = {
  getTodosList, createTodo, deleteTodo
};
