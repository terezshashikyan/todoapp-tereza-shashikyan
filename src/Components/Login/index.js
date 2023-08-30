import {useState} from 'react';
import {auth} from '../../firebase';
import { signInWithEmailAndPassword} from "firebase/auth";
import {Link} from 'react-router-dom';
import "./styles.css";

export const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(() => {alert ('Welcome! You have successfuly signed in.') }).catch((error) => {alert("Wrong Password or Email!")})
      };
    return (
    <section className = 'login-section'>
        <h1>Todos</h1>
        <h2>Welcome to Todos App. Please, login to continue. </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          
          <input
            type = "email"
            id = 'email'
            label="Email Address"
            placeholder='Email'
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

          
          
          <button type="submit">
            Log In
          </button>
        </form>

        <div><Link to={"/registration"}><h2>Haven't registered yet? </h2></Link> </div>
      
    </section>
  )
}