import React from 'react';
import  './style.css';
import ReadOnly from "./ReadOnly";

import {useState } from 'react';




function Contactlist({contacts,setContacts}) {
  const[editContactId, setEditContactId]= useState(null)


  const delteItem=(id)=>{
    const updatedItems= contacts.filter((item,index)=>{
      return index !== id;
    })
    setContacts(updatedItems)
    }
  return (
    <>
   <h1> Contact List</h1>
   {contacts?.length > 0 ?  <table className="table table-dark"  >
        
        
  <thead>
    <tr>
    <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      <th scope="col">Action</th>


    </tr>
  </thead>
 
  <tbody >
  {contacts.map((item,index) => (
    
      <ReadOnly index={index} item={item} key={index}  delteItem={delteItem}/>))}

  </tbody>
 
</table>:<h1>No result Found</h1>
   }   
    </>
  )
}

export default Contactlist
