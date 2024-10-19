import { useState } from "react";
import { v4 } from "uuid";

import ContactList from "./ContactList";
import inputs from "../constans/inputs.js";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4()}
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        {/*
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          name="name"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={contact.lastName}
          name="lastName"
          onChange={changeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          value={contact.email}
          name="email"
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Phone"
          value={contact.phone}
          name="phone"
          onChange={changeHandler}
        />  */}
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default Contacts;
