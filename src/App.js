import React, { useState } from "react";
import './index.css'
const App = () =>{
  const [name,setname] = useState();
  const [fullName,setFullName]=useState();
  const [pass,setpass] = useState();
  const [fullpass,setfullpass] = useState();
  const [mob,setmob] = useState();
  const [fullmob,setFullMob]=useState();
  const [Email,setemail] = useState();
  const [fullemail,setfullemail] = useState();

  const inputEvent=(event)=>{
    setname(event.target.value);
  };
  const passEvent=(event)=>{
    setpass(event.target.value);
  };
  const emailEvent=(event)=>{
    setemail(event.target.value);
  };
  const mobEvent=(event)=>{
    setmob(event.target.value);
  };
  const onSubmit=(event)=>{
    event.preventDefault();
    setFullName(name);
    setfullpass(pass);
    setfullemail(Email);
    setFullMob(mob);
    alert("Form Submitted");
  };
  return(<>
  <div className="main_div">
  <form onSubmits={onSubmit}>
  <div>
    <h1>Hello {fullName} {fullpass}</h1>
    <p> {fullemail}</p>
    <p>{fullmob}</p>
    <input type='text' placeholder="Enter Your Name" 
    onChange={inputEvent}    
    value={name}
    />
    <br />
    <input type='password' placeholder="Enter Your Password"
    onChange={passEvent}
    value={pass} 
    />

<br />
    <input type='email' placeholder="Enter Your Email Id"
    onChange={emailEvent}
    value={Email} 
    />
    <br />
    <input type='phone' placeholder="Enter Your Mobile Number"
    onChange={mobEvent}
    value={mob}
    />
    <button onClick={onSubmit}>Login</button>
  </div>
  </form>
  </div>
  </>);
}

export default App;