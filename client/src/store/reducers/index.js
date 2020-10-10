export default (state = {}, action) => {
    let newState;
    switch(action.type){
        case 'UPDATE_DATA':
        {
            newState = {
                ...state,
                data: action.data
            };
            break;
        }
    }
    return newState; 
}