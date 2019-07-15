import React from 'react'

export default function TeamMember(props) {
    return (
        <div>
            <button onClick={() => props.setUpdateMember(props.member.name)}>update</button> {props.member.name} {props.member.email} {props.member.role}
        </div>
    )
}
