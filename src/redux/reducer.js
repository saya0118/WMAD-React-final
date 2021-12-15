
const issueReducers = (state = [], action) => {
    switch(action.type) {
        case "ADD_ISSUES":
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export default issueReducers;