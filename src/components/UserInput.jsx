import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { changeName } from '../store/slices/userName.slice';
import {useNavigate} from 'react-router-dom'
const UserInput = () => {
    const [userName, setUserName] = useState("")
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const dispatchUserName = () => {
        dispatch(changeName(userName));
        navigate("/pokemon")
    }
    return (
        <div className='userInput-container'>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/905237/International_Pok%C3%A9mon_logo.svg.png"/>
            <img src='src\img\image 11.jpg' alt="" />

            <h1>Hi Pokemon Trainer!</h1>
            <h3>Please Enter Your Name</h3>
            <input type="text"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            ></input>
            <button onClick={dispatchUserName}>Send</button>
            <div className='red-rectangle'></div>
            <div className='black-rectangle'></div>
        </div>
    );
};

export default UserInput;