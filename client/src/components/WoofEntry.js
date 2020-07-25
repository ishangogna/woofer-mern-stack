import React, { useState, useContext } from 'react';
import { InfoContext } from '../context/infoContext';

const WoofEntry = () => {
    const { woofs, dispatch } = useContext(InfoContext);

    return ( 
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name = "name"/>
            <textarea type="text" name = "content"/>
        </form>
     );
}
 
export default WoofEntry;