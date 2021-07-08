const INITIAL_STATE = {
    name: "Rao Hassan"
};

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE":
           return {
                ...state,
                name: action.name
            }
    
        default:
            return state;
    }
}

export default Reducer;