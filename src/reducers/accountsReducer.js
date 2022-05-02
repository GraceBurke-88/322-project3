
const accountsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACCOUNTS':
            return action.payload;
        case 'ADD_ACCOUNT':
            console.log(state)
            let account = action.payload;
            account._id = state.length +1;
            state.push(account);
            return(state);

        case 'DELETE_ACCOUNT':
            const accountIndex = state.findIndex(t => t._id === action.payload);
            let accountList = [ ...state ];
            accountList.splice(accountIndex, 1);
            return accountList;

        case 'ACCOUNT_SELECTED':

            const accountIndex1 = state.findIndex(t => t._id === action.payload);
            console.log(accountIndex1 )
            let newState1 = [ ...state ];
            console.log(newState1)
            newState1.selectedAccount = action.payload;
            console.log(newState1)
            console.log(state)
            return  newState1;

        case 'DEPOSIT':

        default:
            return state;
    }

}

export default accountsReducer;