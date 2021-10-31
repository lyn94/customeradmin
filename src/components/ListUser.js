import React from 'react';
import ItemUser from './ItemUser';

const ListUser = ({data, onRemove, onModify}) => {
    return (
        <div>
            <h2 className="users">고객리스트</h2>
            <table>
                <colgroup>
                    <col className="name" />
                    <col className="addr" />
                    <col className="admin" />
                </colgroup>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>주소</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( data => <ItemUser key={data.id} data={data} onRemove={onRemove} onModify={onModify} />)
                    }
                    
                </tbody>
            </table>
            
        </div>
    );
};

export default ListUser;