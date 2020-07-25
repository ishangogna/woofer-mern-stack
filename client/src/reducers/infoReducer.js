const InfoReducer = (state, action) => {
    switch(action.type){
        case 'GET_WOOFS':
            const url = 'http://localhost:2000/api/woofs';
            fetch(url)
            .then(response => response.json())
            .then(data => {
                return [
                    ...state, 
                    data
                ]
            })
    }
}