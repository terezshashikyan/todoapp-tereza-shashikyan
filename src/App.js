import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./Components/Layout";
import {Home} from "./Components/Home";
import {Todos} from "./Components/Todos";
import {Login} from "./Components/Login";
import {Registration} from "./Components/Registration";
import {useEffect, useState} from 'react';
import {  onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from './firebase';
import './App.css';

function App() {

  const [authUser, setAuthUser] = useState(null);

    useEffect( () => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user);
                return true;
            } else {
                setAuthUser(null)
            }
    
        })

        return () => {listen()};
    }, []);


    if(authUser) {
      return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout/>} > 
          <Route index element = {<Home/>} /> 
          <Route path="/" element={<Home/>} />
          <Route path="todos" element={<Todos/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  )} else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
      </BrowserRouter>
    )
    
  }


};

export default App;
