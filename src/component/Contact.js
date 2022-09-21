import {useState} from 'react'
import  './style.css';

export default function Contact({addContact}) {

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    password: "",
    city:"",
    state:""
  })

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
 event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", email: "", password: "" , city:"",state:""});
    alert("successfully added the contact");
  };
 
  return (
  <>
     <div className="form-body ">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Add Contacts</h3>
                        <p>Fill in the data below.</p>
                        <form className="requires-validation" onSubmit={handleSubmit} >

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="name" placeholder="Enter Your Name" onChange={handleChange}   value={contactInfo.name} required / >
                          
                           
                            </div>

                            <div className="col-md-12">
                                <input className="form-control" type="email" name="email"  placeholder="Enter Your Email" onChange={handleChange}  value={contactInfo.email} required / >
                                
                               
                            </div>

                          
                           <div className="col-md-12">
                              <input className="form-control" type="password"  name="password" placeholder="Choose a Password" onChange={handleChange}   value={contactInfo.password}  required />
                               
                           </div>

                           <div className="col-md-12 my-3">
                              <input className="form-control" type="text"  name="state" onChange={handleChange}  placeholder="Enter Your State" value={contactInfo.state} required />
                            
                           </div>


                           <div className="col-md-12 my-3">
                              <input className="form-control" type="text"  name="city" onChange={handleChange}  placeholder="Enter Your City"  value={contactInfo.city} required />
                              
                           </div>

                        
                  

                            <div className="form-button mt-3">
                                <button id="submit" type="submit"  className="btn btn-warning">Add Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    </>  
    
  )
}


