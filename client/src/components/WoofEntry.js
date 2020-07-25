import React, { useState } from 'react';

const WoofEntry = () => {
    return ( 
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name = "name"/>
            <textarea type="text" name = "content"/>
        </form>
     );
}
 
export default WoofEntry;