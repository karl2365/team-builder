import React, { useState, useEffect } from 'react'
import './component.css';

export default function Form(props) {

    const [formMember, setFormMember] = useState({});
    let name;
    if(props.member[0]) {name=props.member[0].name}
    // console.log('props', props);
    // console.log('props name', props.member.name);
    // if (props.member.update) {
        useEffect(() => {
            // console.log('props', props);
            setFormMember({...props.member[0]})

        },[])
    
    // }
    console.log('name out of useeffect', name)

    const handleChange = e => {
        setFormMember({...formMember, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        // name=formMember.name;
        props.member.update ? props.updateMember(name, formMember) : 
        props.addMember(formMember);
        setFormMember({name: '', email: '', role: '', update: false});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: &nbsp;
                    <input type='text' onChange={handleChange} name='name' placeholder='name' value={formMember.name} />
                </label>
                <label>
                    Email: &nbsp;
                    <input type='email' onChange={handleChange} name='email' placeholder='email' value={formMember.email} />
                </label>
                <label>
                    Role: &nbsp;
                    <input type='text' onChange={handleChange} name='role' placeholder='role' value={formMember.role} />
                </label>
                <button> submit </button>
            
            
            </form>
        </div>
    )
}
