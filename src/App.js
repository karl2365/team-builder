import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './components/TeamMember';
import Form from './components/Form';



function App() {

  const [member, setMember] = useState({
    name: '',
    email: '',
    role: '',
    update: false
  });

  const [list, setList] = useState ([{name: 'Karl', email: 'karlbeksa@gmail.com', role: 'developer'}]);

  const setUpdateMember = (name) => {
    let updated = list.filter(item => item.name === name)
    // let updated = updatedArr[0];
    console.log('updated list', updated)
    setMember({...updated, update: true})
  }
  const updateMember = (name, update) => {
    console.log(update, name, 'hello')
    let updated = list.filter(item => item.name !== name)
    // console.log(list);
    setList([...updated, update]);
    // console.log(list);
    setMember({...update, update: false})


  }

  const addMember = (add) => {
    setList([...list, add]);
  }
//  console.log('member', member);
  return (
    <div className="App">
      {list.map(member => <TeamMember member={member} setUpdateMember={setUpdateMember} key={member.name} />)}
      <Form member={member} updateMember={updateMember} addMember={addMember} key={member.name} />
    </div>
  );
}

export default App;
