import {useState} from 'react'

function Trial() {
let a=[1,2,3,4,5,6,7,4,2,5,6,6]
let duplicates=[]
 duplicates = a.filter((item, index) => index === a.indexOf(item));
console.log(duplicates)
  let z=34.5687
  console.log(z.toFixed(2))
    const[checkAge,setCheckAge]=useState({
        age:0
    })
    const checkValue =(e)=>{
        setCheckAge({...checkAge,[e.target.name]:e.target.value})

    }
    const checkFn = (event) => {
      event.preventDefault();
        let z= Number(checkAge.age)
        if(z >=18){
         
          alert("age should be less than 18")
        }
        else{
          alert("age is" + z)
        }
         setCheckAge({ age:0});
       };
  return (
<> 
<input type="number" name="age" value={checkAge.age} onChange={checkValue}/>
<button type="submit" onClick={checkFn}> Check Age</button>
</>
  )
}

export default Trial