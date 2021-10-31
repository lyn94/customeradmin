import React, { useEffect, useState } from 'react';
import './edituser.css';
import { FaSave } from "react-icons/fa";
import { ImCancelCircle } from "react-icons/im";

const EditUser = ({ current, onUpdate, setIsEdit }) => {
    const [ data, setData ] = useState(current)
    const { id, name, addr } = data

    const changeInput = (e) => {
        const { value, name } = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //id는 번호 비교, data는 내용 전체를 갱신
        onUpdate(id, data)
        setData({
            name:'',addr:''
        })   
    }

    useEffect(() => {
        setData(current)
    },[current])

    return (
        <form className="clearfix">
            <h2>고객명단 수정</h2>
            <p>
                <label>이름</label>
                <input type="text" value={name} name="name" onChange={changeInput} />
            </p>
            <p>
                <label>주소</label>
                <input type="text" value={addr} name="addr" onChange={changeInput} />
            </p>
            <p>
                <button className="editBtn" onClick={onSubmit}> <FaSave /></button>
                <button className="canBtn" onClick={ () => setIsEdit(false)}> <ImCancelCircle/> </button>
            </p>
        </form>
    );
};

export default EditUser;