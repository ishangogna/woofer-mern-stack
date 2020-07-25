import React, { useEffect, useState, useContext } from 'react';
import { InfoContext } from '../context/InfoContext';


//GetWoofs will optimize as it restricts useEffect to make continuous requests to the server.
// this will only be triggers when the getWoofs context (controlled by reducer) changes.
const GetWoofs = () => {
    const [woofs, setWoofs] = useState([]);
    const { getWoofs } = useContext(InfoContext);
    const url = window.location === 'localhost' ? "http://localhost:2000/api/woofs" : "https://ishan-woofer.vercel.app/api/woofs"; 
    useEffect(()=> {
        document.title = "Woofer! Twitter for Dogs 🐶🐕"
        fetch(url)
            .then(response => response.json())
            .then(data => { setWoofs(data.reverse()) })
            .catch(err => console.log(err));
    }, []);
    useEffect(()=> {
        document.title = "Woof! Twitter for Dogs 🐶🐕"
        fetch(url)
            .then(response => response.json())
            .then(data => { setWoofs(data.reverse()) })
            .catch(err => console.log(err));
    }, [getWoofs]);
    return ( 
        <div className = 'woofs'>
            {woofs.map(woof=>(
                <div className = "woof" key = {woof._id}>
                    <div className = "woof-name">{woof.name}</div>
                    <div className = "woof-content">{woof.content}</div>
                    <div className = "woof-createdAt">{woof.createdAt}</div>
                </div>
            ))} 
        </div>
     );
}
 
export default GetWoofs;