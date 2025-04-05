const reducerTest = (state, action) => {
    switch (action.type) {
        case "Plus":
            return { count: state.count + 1 }
        case "Minus":
            return { count: state.count - 1 }
        case "Reset":
            return { count: 0 }
        default:
            return state;
    }
}

export default reducerTest;