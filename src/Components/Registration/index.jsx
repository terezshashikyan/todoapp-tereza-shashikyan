import {useState} from 'react';
import {auth} from '../../firebase';
import { createUserWithEmailAndPassword} from "firebase/auth";
import {doc,setDoc, addDoc } from "@firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import './styles.css'



export const Registration = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleUserRegistration = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => { setDoc (doc(db, 'users',userCredentials.user.uid ),  {email: email, todosList: [{todoText: 'Water Plants', completed: false, id: 'Water Plants' }]});}).catch((error) => {alert(error)});
    navigate('/')
  };

    return (
    <div className = 'registration-section'>
     
        <h1>Todos</h1>
        
        <form className="registration-form" onSubmit={handleUserRegistration}>
          <input
            type = "email"
            id = 'email'
            placeholder='Email'
            label="Email Address"
            value = {email}
            onChange={(e) => {setEmail(e.target.value)}} 
           required
           autocomplete="false"
          />

          
          <input         
            label="Password"
            type="password"
            id="password"
            placeholder='password'
            value = {password}
            onChange= {(e) => {setPassword(e.target.value)}} 
            required
           autocomplete="false"
          />

          
          
          <button type = 'submit'>
            Register
          </button>
        </form>
      
    </div>
  )
}