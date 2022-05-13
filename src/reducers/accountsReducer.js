const accountsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACCOUNTS':
            console.log(action.payload)
            return action.payload;

        case 'ADD_ACCOUNT':
            console.log(state)
            let account = action.payload;
            account._id = state.length +1;
            state.push(account);
            return(state);

        case 'EDIT_ACCOUNT':
            console.log(state[action.payload._id-1])
            state[action.payload. _id-1].name = action.payload.name;
            state[action.payload. _id-1].balance = action.payload.balance;
            return state;


        case 'DELETE_ACCOUNT':
            const accountIndex = state.findIndex(t => t._id === action.payload);
            let accountList = [ ...state ];
            accountList.splice(accountIndex, 1);
            return accountList;

        case 'ACCOUNT_SELECTED':
            const accountIndex1 = state.findIndex(t => t._id === action.payload);
            console.log(accountIndex1 )
            let newState1 = [ ...state ];
            console.log(state[accountIndex1])
            console.log(newState1)
            newState1.selectedAccount = action.payload;
            console.log(newState1)
            return  newState1;

        case 'DEPOSIT':
            const accountIndex2 = state.findIndex(t => t._id === action.payload._id);
            console.log("index is: " + accountIndex2 )
            console.log(typeof(state[accountIndex2]))
            state[accountIndex2].balance = state[accountIndex2].balance + action.payload.amount
            console.log(state[accountIndex2].balance)
            console.log(action.payload.amount)
            console.log(state[1])
            return [ ...state ];

        case 'WITHDRAW':
            const accountIndex3 = state.findIndex(t => t._id === action.payload._id);
            console.log("index is: " + accountIndex3 )
            console.log(typeof(state[accountIndex3]))
            state[accountIndex3].balance = state[accountIndex3].balance - action.payload.amount
            console.log(state[accountIndex3].balance)
            console.log(action.payload.amount)
            console.log(state[1])
            return [ ...state ];




        default:
            return state;
    }

}

export default accountsReducer;