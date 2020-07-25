import React, { useEffect, useState } from 'react';

const GetWoofs = () => {
    const [woofs, setWoofs] = useState([]);
    
    useEffect(()=> {
        const url = "http://localhost:2000/api/woofs";
        fetch(url)
            .then(response => response.json())
            .then(data => { setWoofs(data.reverse()) })
            .catch(err => console.log(err));
    }, [woofs])
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