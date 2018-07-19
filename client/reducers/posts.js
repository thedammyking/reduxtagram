export default function posts(state = [], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            let i = action.index;
            let newState = [...state] ;
            newState[i].likes++;
            return newState;
        default:
            return state;
    }
}