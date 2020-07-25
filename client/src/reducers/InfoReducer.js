const InfoReducer = (state,action) => {
    switch(action.type){
        case 'GET_WOOFS':
            return !state;
        default : 
            return state;
    }
}
 
export default InfoReducer;