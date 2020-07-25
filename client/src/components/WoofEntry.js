import React, { useState, useContext } from 'react';
import { InfoContext } from '../context/InfoContext';

const WoofEntry = () => {
    const { getWoofs, dispatch } = useContext(InfoContext);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const addWoof = (e) => {
        e.preventDefault();
        const body = name && content ? {name,content} : null
        const url = window.location === 'localhost' ? "http://localhost:2000/api/woofs" : "https://ishan-woofer.vercel.app/api/woofs"; 
        fetch(url, {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(body)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('error : ' + err));
        setName('');
        setContent('');
        //dispatch an action to the InfoReducer to negate the getWoofs state in Context
        dispatch({type:'GET_WOOFS'});
        
    }   
    return ( 
        <form className = "woof-entry">
            <label htmlFor="name">Name</label>
            <input value = {name} type="text" name = "name" onChange = {(e)=>setName(e.target.value)} required/>
            <label htmlFor="content">Woof</label>
            <textarea value = {content}  rows={5} type="text" name = "content" onChange = {(e) => setContent(e.target.value)}/>
            <input type="submit" value = 'Add a woof!🐕' onClick = {addWoof}/>
        </form>
     );
}
 
export default WoofEntry;