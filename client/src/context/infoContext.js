import React, { createContext, useState, useReducer } from 'react';
import InfoReducer from '../reducers/infoReducer';

export const InfoContext = createContext();

const InfoContextProvider = (props) => {
    const [woofs, dispatch] = useReducer(InfoReducer, []) 
    return ( 
        <InfoContext.Provider value = {{woofs, dispatch}}>
            {props.children}
        </InfoContext.Provider>
     );
}
 
export default InfoContextProvider;