import React, { useState, useEffect } from 'react'

export default function Form(props) {

    const [formMember, setFormMember] = useState({});
    const name = props.member.name;
    console.log(props);
    console.log('props name', props.member.name);
    // if (props.member.update) {
        useEffect(() => {
            console.log('props', props);
            setFormMember({...props.member[0]})
        },[])
    
    // }
    const handleChange = e => {
        setFormMember({...formMember, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.member.update ? props.updateMember(name, formMember) : 
        props.addMember(formMember);
        setFormMember({name: '', email: '', role: '', update: false});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input type='text' onChange={handleChange} name='name' placeholder='name' value={formMember.name} />
                </label>
                <label>
                    Email
                    <input type='email' onChange={handleChange} name='email' placeholder='email' value={formMember.email} />
                </label>
                <label>
                    Role
                    <input type='text' onChange={handleChange} name='role' placeholder='role' value={formMember.role} />
                </label>
                <button> submit </button>
            
            
            </form>
        </div>
    )
}
