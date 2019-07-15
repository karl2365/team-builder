import React from 'react';
import './component.css';
export default function TeamMember(props) {
    return (
        <div className='list'>
            <button onClick={() => props.setUpdateMember(props.member.name)}>update</button> 
            <p>Name:  {props.member.name}</p> 
            <p>Email: {props.member.email}</p> 
            <p>Role: {props.member.role}</p>
        </div>
    )
}
