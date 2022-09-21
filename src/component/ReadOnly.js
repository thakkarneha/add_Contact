import React from 'react'

function ReadOnly({index,item,delteItem,handelClick}) {
  return <tr >
  <th scope="row">{index+1}</th>
  <td>{item.name}</td>
  <td>{item.email}</td>
  <td>{item.password}</td>
  <td>{item.state}</td>
  <td>{item.city}</td>
  <td> <button type="button" className="btn btn-danger ml-3" onClick={()=>delteItem(index)}><i className="fa fa-trash"></i></button>
 
</td> 
</tr>
}

export default ReadOnly