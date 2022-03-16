import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Newuser () {
    const [message, setMessage] = useState ("");

    const [details, setDetails] = useState({
        name: "", 
        email: "",
        password: "",
        bread: ""
    })

    const submitHandler = async e => {
        e.preventDefault()
        fetch("/api/users", {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(details)
          })
          .then((response) => {
            return response.json()
        })
        .then((data) => {
                           setMessage(data.message)
        })
        console.log(details)
    }

  return (
    <form onSubmit={submitHandler}> 
        <div className='form-inner'>
            <h2>Skapa ny användare</h2>
            <p>Tillbaka till <Link to="/WelcomePage">inloggning</Link></p>
            <div className='errorMessage'>
                 {message}
             </div>
            <div className='form-group'>
                <label htmlFor='name'>Namn:</label>
                <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
            </div>
                 <div className='form-group'>
                     <label htmlFor='email'>
                         mejl:
                         </label>
                         <input type="email" name="email" id="email"
                         onChange={e => setDetails({...details, email: e.target.value.toLowerCase()})} value={details.email}>
                        </input> 
                </div>
                        <div className="form-group">
                        <label htmlFor='password'>
                            lösenord:
                        </label>
                        <input type="password" name="password" id="password"
                        onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                        </div>
                        <div className='form-group'>
                     <label htmlFor='bread'>
                         Tycker du om bröd?:
                         </label>
                         <input type="text" name="bread" id="bread"
                         onChange={e => setDetails({...details, bread: e.target.value})} value={details.bread}>
                        </input>
                        </div>
                        <input type="submit" value="Skapa"></input>
         </div>
    </form>
  )
}

export default Newuser