
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";



function App() {
  const [alert, setalert] = useState(null) //new state

  const showAlert = (message, type) =>{
    setalert({
     msg:message,
     type:type
    })
    setTimeout(() =>{
      setalert(null);
    },1500);
  }

  return (
    <>
  {/* <Router> */}
        <Navbar title="TextUtils" aboutText="about textutils"></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container">  
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={} />
          </Routes>  */}
          <Textform showAlert={showAlert} heading="Enter text to Analyze" />    
        </div> 
      {/* </Router> */}
    </>
  );
}

export default App;
