import React, { useState } from 'react';

const WoofEntry = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const addWoof = (e) => {
        e.preventDefault();
        const body = name && content ? {name,content} : null
        const url = "http://localhost:2000/api/woofs";
        fetch(url, {
            method : "POST",
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(body)
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log('error : ' + err));
    }
    return ( 
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name = "name" onChange = {(e)=>setName(e.target.value)} required/>
            <label htmlFor="content">Woof</label>
            <textarea type="text" name = "content" onChange = {(e) => setContent(e.target.value)}/>
            <input type="submit" value = 'Add a woof!🐕' onClick = {addWoof}/>
        </form>
     );
}
 
export default WoofEntry;