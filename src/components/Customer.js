import React, { useRef, useState } from 'react';
import '../utils/css/reset.css'
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';

const Customer = () => {
    const id = useRef(1)
    const [ data , setData ] = useState([])
     // 데이터 수정
    const [ isEdit, setIsEdit ] = useState(false)
    // 데이터 하나 값만 받아올 공간
    const [ current, setCurrent ] = useState({})

    // 수정버튼 눌렀을 때 환경 바꾸기
    const onModify = ( data ) => {
        setIsEdit(true)
        setCurrent( data )
    }
    const onUpdate = (id, updata) => {
        setData( data.map(data => data.id === id ? updata:data ))
        setIsEdit(false)
    }
    
    // 데이터 추가
    const onAdd = (userInput) => {
        userInput.id = id.current++
        setData([
            ...data,
            userInput
        ])
    }
    // 데이터 삭제
    const onRemove = (id) => {
        setData(data.filter(data => data.id !== id))
    }
    

    return (
        <div className="Customer">
            { 
                isEdit ? 
                <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} /> : <AddUser onAdd={onAdd}  /> 
            }

            <ListUser data={data} onRemove={onRemove} onModify={onModify} />
        </div>
    );
};

export default Customer;