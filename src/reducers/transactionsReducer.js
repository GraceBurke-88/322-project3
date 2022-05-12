const transactionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            console.log(state)
            return action.payload;

        case 'ADD_TRANSACTION':
            console.log(state)
            let transaction = action.payload;
            transaction._id = state.length +1;
            state.push(transaction);
            return(state);

        default:
            return state;
    }
}

export default transactionsReducer;