import React from 'react'
import Newuser from './newuser';
import Main from './main';
import Userloggedin from './userloggedin';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

     return (
       <Router>
    <div className="application">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Newuser" element={<Newuser />}></Route>
        <Route path="/Userloggedin" element={<Userloggedin />}></Route>
        <Route path="*" element={<Main />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;