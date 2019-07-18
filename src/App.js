import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import TeamMember from "./components/TeamMember";
import Form from "./components/Form";

function App() {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "",
    update: false
  });

  const [list, setList] = useState([]);

  const setUpdateMember = name => {
    let updated = list.filter(item => item.name === name);
    setMember({ ...updated, update: true });
  };
  const updateMember = (name, update) => {
    let updated = list.filter(item => item.name !== name);
    setList([...updated, update]);
    setMember({ ...update, update: false });
  };

  const addMember = add => {
    setList([...list, add]);
  };
  return (
    <div className="App">
      {list.map(member => (
        <TeamMember
          member={member}
          setUpdateMember={setUpdateMember}
          key={member.name}
        />
      ))}
      <Form
        member={member}
        updateMember={updateMember}
        addMember={addMember}
        key={member.name}
      />
    </div>
  );
}

export default App;
