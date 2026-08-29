import { useState } from "react";
import './Form.css'


function Form(){
    let [ formData , setFormData ] = useState({ name : '' , email :''});
    // let [name , setName] = useState('');
    // let [ email , setEmail ] = useState('');
    // set the formData to be empty


    // so just collect everything in a single object
    // set the name : value to be empty and then update the form
    const handleChange = (e)=>{
        // will take the values and then set it in the form
        let nameOfInput = e.target.name;
        let valueOfInput = e.target.value;
        // setName(e.target.value)
        setFormData({...formData , [nameOfInput] : valueOfInput})
        console.log('Final Object');
        console.log(formData)

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Final Object');
        console.log(formData)
    }


    return (
        <form>
            <label htmlFor='name'>Name</label>
            <input name="name" id='name' value={formData.name} onChange={handleChange}></input>

            <label htmlFor='Email'>Email</label>
            <input name="email" id='Email' value={formData.email}  onChange={handleChange}></input>

            <input type='submit' onClick={handleSubmit}></input>
        </form>
    )

}

export default Form;