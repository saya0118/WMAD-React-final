export const addItem = (value) => {
    return {
        type: "ADD_ISSUES",
        payload: value
    }
};

export const editItem = (value) => {
    return{
        type: "EDIT_ISSUE",
        payload: value
    }
}

export const EDIT_ISSUE = "EDIT_ISSUE";

