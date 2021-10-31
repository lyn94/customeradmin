import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";

const ItemUser = ({ data, onRemove, onModify }) => {
    const { id, name, addr } = data
    return (
        <tr>
            <td>{ name }</td>
            <td>{ addr }</td>
            <td>
                <button className="editBtn" onClick={()=>onModify(data)}><BiEditAlt/></button>
                <button className="delBtn" onClick={() => onRemove(id) }><AiOutlineDelete /></button>
            </td>
        </tr>
    );
};

export default ItemUser;