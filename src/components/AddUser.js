import React, { useRef, useState } from 'react';
import './adduser.css';
import { GoPlus } from "react-icons/go";

const AddUser = ({onAdd}) => {
    const nameRef = useRef()
    const [ userInput, setUserInput ] = useState({
        name:'', addr:''
    })
    const { name, addr } = userInput

    const changeInput = (e) => {
        const { value, name } = e.target
        setUserInput({
            ...userInput,
            [name]:value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //input에 공백일 경우 데이터가 추가되지 않음
        if( !name || !addr ) return
        // 데이터추가
        onAdd(userInput)
        // 입력폼초기화
        setUserInput({
            name:'', addr:''
        })
        // 첫번째 input에 초기화
        nameRef.current.focus()
    }


    return (
        <form onSubmit={onSubmit}>
            <h2>고객명단 추가</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} ref={nameRef} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={changeInput} />
            </p>
            <p>
                <button type="submit"><GoPlus /></button>
            </p>
        </form>
    );
};

export default AddUser;