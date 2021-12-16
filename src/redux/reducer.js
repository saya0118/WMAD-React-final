import * as Actions from './action'
import initialState from './initialState'

const issueReducers = (state = [], action) => {
    switch(action.type) {
        case "ADD_ISSUES":
            return [
                ...state,
                action.payload
            ]
        case "EDIT_ISSUE":
            const newItem = action.payload;
            const updatedIssues = state.map(oldItem => {
                if (oldItem.id === newItem.id) {
                    console.log("👨🏼‍🚀")
                    oldItem = newItem;
                }

                return oldItem
            })

            return updatedIssues;
        default:
            return state;
    }
}

export default issueReducers;

// export const editReducers = (state = initialState.issue, action) => {
//     switch(action.type) {
//         case Actions.EDIT_ISSUE:
//             return [
//                 ...state,
//                 ...action.payload
//             ]
//         default:
//             return state;
//     }
// }