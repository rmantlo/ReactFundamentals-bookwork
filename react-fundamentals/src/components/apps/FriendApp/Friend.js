import React from 'react';
import FaTrashO from 'react-icons/lib/fa/trash-o';

const Friend = ({ friend, removeFriend }) => {
    return (
        <div>
            <li className='list-group-item'>
                <strong>Name: </strong>{friend.name}
                <br />
                <strong>Age: </strong>{friend.age}
                <br />
                <button onClick={ (e) => {removeFriend(e, friend) }} className='btn btn-danger trash'><span><FaTrashO /></span></button>
            </li>
        </div>
    )
}
export default Friend;