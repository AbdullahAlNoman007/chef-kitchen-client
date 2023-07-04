import React from 'react';
import { AiFillDelete } from 'react-icons/ai'

const Listdetails = ({item,handleClick,handleDelete}) => {
    const {serviceName,customer,phone,image,address,email,status,_id}=item
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                    <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{customer}</div>
                    <div className="text-sm opacity-50">{address}</div>
                </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br/>
                <span className="badge badge-ghost badge-sm">Chef Food Kitchen</span>
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <th>
                <button className="btn btn-ghost btn-xs" onClick={()=>handleClick(_id)}>{status? status: "Pending"}</button>
            </th>
            <th>
                <button className="btn btn-ghost btn-xs text-xl" onClick={()=>handleDelete(_id)}><AiFillDelete/></button>
            </th>
        </tr>
    );
};



export default Listdetails;