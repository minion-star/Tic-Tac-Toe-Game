//File name is App.js
//It contains the form, its structure
//and Basic Form Functionalities

import './App.css';
import {react, useState} from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subejcts,setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subejcts,
      resume,
      url,
      about
    );
    //Add your form submission logic here
  };

  const handleSubjectChange = (sub)=>{
    setSubjects((prev)=>({
      ...prev, [sub]: !prev[sub],
    }));
  };

  const handleReset=()=>{
    //Reset all state variables here
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  return(
    <div className='App'>
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label for="firstname">First Name*</label>
          <input
            type='text'
            name='firstname'
            id='firstname'
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            placeholder='Enter First Name'
            required 
          />
          <label for="lastname">Last Name*</label>
          <input
            type='text'
            name='lastname'
            id='lastname'
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            placeholder='Enter Last Name'
            required
          />
          <label for="email">Enter Email*</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter email'
            required
          />
          <label for="tel">Contact*</label>
          <input
            type='tel'
            name='contact'
            id='contact'
            value={contact}
            onChange={(e)=>setContact(e.target.value)}
            placeholder='Enter Mobile number'
            required
          />
          <label for="gender">Gender*</label>
          <input
            type='radio'
            name='gender'
            value='male'
            id='male'
            checked={gender==="male"}
            onChange={(e)=>setGender(e.target.value)}
          />
          Male
          <input
            type='radio'
            name='gender'
            value='female'
            id='female'
            checked={gender==="female"}
            onChange={(e)=>setGender(e.target.value)}

          />
          Female
          <input
            type='radio'
            name='gender'
            value='other'
            id='other'
            checked={gender==="other"}
            onChange={(e)=>setGender(e.target.value)}

          />
          other
          <label for="lang">Your best Subject</label>
          <input
            type='checkbox'
            name='lang'
            id='english'
            checked={subejcts.english===true}
            onChange={(e)=>handleSubjectChange("english")}
          />
        </form>
      </fieldset>
    </div>
  );
}