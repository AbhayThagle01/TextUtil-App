
import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


function App() {

  const [alert, setAlert] = useState(null)

 const showAlert=(message,type)=>{
setAlert({
  mes:message,
  type:type
})
setTimeout(() => {
  setAlert(null)
}, 1500);
  }

  const [mode, setmode] = useState('light')
  
   const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.background='grey'
  showAlert("success","Dark mode enable!!")
    }
    else{
      setmode('light')
      document.body.style.background='white'
      showAlert("success","Light mode enable!!")

    }
  }
  const toggleMode2=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.background='pink'
  showAlert("success","Pink mode enable!!")
    }
    else{
      setmode('light')
      document.body.style.background='white'
      showAlert("success","Light mode enable!!")

    }
  }
  const toggleMode1=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.background='blue'
  showAlert("success","blue mode enable!!")
    }
    else{
      setmode('light')
      document.body.style.background='white'
      showAlert("success","Light mode enable!!")

    }
  }
 
  return (
    
    <>
     <Router>
    <NavBar title="TextUtils" mode={mode} toggleMode2={toggleMode2} toggleMode1={toggleMode1} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container">
    <Switch>
          <Route exact path="/About">
            <About mode={mode}/>
          </Route>
  
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter The Text To Analysis"  alert={alert} mode={mode}/>
          </Route>
        </Switch>
      
  
    </div>

    </Router>
    </>
  );
}

export default App;
