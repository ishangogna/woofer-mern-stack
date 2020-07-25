import React, { useState,useReducer, createContext } from 'react';
import InfoReducer from '../reducers/InfoReducer';

export const InfoContext = createContext();

const InfoContextProvider = (props) => {
    const [getWoofs, dispatch] = useReducer(InfoReducer, false)
    return (  
        <InfoContext.Provider value = {{getWoofs, dispatch}}>
            {props.children}
        </InfoContext.Provider>
     );
}
 
export default InfoContextProvider;