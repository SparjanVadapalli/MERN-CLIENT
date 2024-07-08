import React from 'react';
import ReactDOM from 'react-dom/client';
//import Example from './Example';
//import TodoList from './components/TodoList';
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import Navbar from './components/navbar';
//cimport Mycomponent from './Mycomponent';
//import Example from './Example';
//import { Mycontext } from './Mycontext';
const root =document.getElementById('root');
const virtualRoot= ReactDOM.createRoot(root)
virtualRoot.render(
  <Router>
  <div>  
    <navbar/>
    
   
  </div>
  <Routes>
    
    <Route path="/register" element={<Register/>} />
  </Routes>
  
  </Router>
  
);