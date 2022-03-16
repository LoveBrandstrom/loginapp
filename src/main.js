import React from 'react'
import { Link } from "react-router-dom"
import Userlogin from './userlogin'

function Main () {
    return (
        <div>
        <h2>tja hej, logga in eller registrera dig</h2>
      <Userlogin/>
    <p>ny användare? <Link to="/newuser">klicka här</Link></p>
        </div>
    )
}

export default Main