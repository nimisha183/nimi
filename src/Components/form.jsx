import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import OpenModal from "./popup";
import Checkbx from "./checkbx";

function Form1({ addUserData }) {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [dob, setDob] = useState();
  const [age, setAge] = useState();
  const [id, setId] = useState();
  const [gender, setGender] = useState();
  const [dept, setDept] = useState();
  const [tech, setTech] = useState();
  const [parent, setParent] = useState();
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState();
  // const [count, setCount] = useState(0);

  const reset = () => {
    setName("");
    setSurname("");
    setDob("");
    setAge("");
    setId("");
    setGender("");
    setDept("");
    setTech("");
    setParent("");
    setMobile("");
    setAddress("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + 1);
    addUserData([
      name,
      surname,
      dob,
      age,
      id,
      gender,
      dept,
      tech,
      parent,
      mobile,
      address,
    ]);
    reset();
  };

  return (
    <form
      id="myForm"
      onSubmit={(e) => {
        handleSubmit(e);
      }}>
      <br />
      <label>First Name</label>
      <br />
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label> Last Name</label>
      <br />
      <input
        name="surname"
        type="text"
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />
      <br />
      <label>Date of Birth</label>
      <br />
      <input
        name="dob"
        type="date"
        value={dob}
        onBlur={(e) => setDob(e.target.value)}
      />
      <br />
      <label>Age</label>
      <br />
      <input
        name="age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <label>ID</label>
      <br />
      <input
        name="id"
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <br />
      <label>Gender</label>
      <div name="gender">
        <input
          type="radio"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
          checked={gender === "Male"}
        />{" "}
        Male
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
        <input
          type="radio"
          value="Other"
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Other
      </div>
      <br />
      <Checkbx techstack={(tech) => setTech(tech)} />
      {/* <input
        type="checkbox"
        value="java"
        // onBlur={(e) => setTech(e.target.value)}
      />
      JAVA
      {tech} */}
      <br />
      <br />
      <select
        name="dept"
        value={dept}
        onChange={(e) => setDept(e.target.value)}>
        <option>Choose Department</option>
        <option value="Aerospace">Aerospace</option>
        <option value="CS">CS</option>
        <option value="IT">IT</option>
        <option value="Elec"> Elec </option>
      </select>{" "}
      <br />
      <br />
      {/* <Popup
        trigger={<OpenModal details={(parent) => setParent(parent)} />}
        position="right"></Popup>
      <div> badge: {parent}</div> */}
      <br />
      <br />
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://walmart.com";
        }}>
        Explore Walmart
      </button>
      <br />
      <br />
      <Popup
        trigger={<button>Submit</button>}
        position="top center"
        nested>
        <span>Thank you! Your data has been submitted successfully.</span>
      </Popup>
      {/* <div> Count = {count} </div> */}
    </form>
  );
}

export default Form1;
