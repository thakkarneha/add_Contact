// import {useState} from 'react'
//import Trial from "./component/trial";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";

import Contactlist from "./component/Contactlist";

import {
  BrowserRouter as Router,
  Route ,
Routes} from 'react-router-dom'
import { useState } from "react";



function App() {
  const[contacts,setContacts]=useState([])
   const addContact=(contactInfo)=>{
   setContacts(contacts => [...contacts,contactInfo]);
 
   }
  
  return (
   <>
   <Router>
   <Navbar/>
  
   <div className="App">
 
 {/* <Trial/> */}
 <Routes>
 <Route exact path="/"  element=<Contact addContact={addContact}/>>

 </Route>
 <Route exact path="/contactList"  element=<Contactlist contacts={contacts} setContacts={setContacts}/>>
  
 </Route>
</Routes>
</div> 
</Router>
</>
  )
}

export default App;
