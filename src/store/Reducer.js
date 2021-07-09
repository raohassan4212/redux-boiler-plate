const INITIAL_STATE = {
    name: "Rao Hassan",
    api: undefined
};

const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                ...state,
                name: action.name
            }
        case "API":
            return {
                ...state,
                api: action.api
            }

        default:
            return state;
    }
}

export default Reducer;