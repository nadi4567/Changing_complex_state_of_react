import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function updateContact(e) {
    const { name, value } = e.target;
    console.log(e.target);
    setContact((preValue) => {
      console.log(preValue);
      switch (name) {
        case "fName":
          return {
            fName: value,
            lName: preValue.lName,
            email: preValue.email
          };
        case "lName":
          return {
            fName: preValue.fName,
            lName: value,
            email: preValue.email
          };
        case "email":
          return {
            fName: preValue.fName,
            lName: preValue.lName,
            email: value
          };
        default:
          return preValue;
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={updateContact}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={updateContact}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={updateContact}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
