
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
           // console.log(action.payload)
           // console.log(state.length)
           // return [
            //    ...state,

            //    { name: action.payload, balance: action.payload, _id: state.length + 1 }
            //    state.accounts.push(state);

           // ]
        case 'DELETE_ACCOUNT':
            const accountIndex = state.findIndex(t => t._id === action.payload);
            let accountList = [ ...state ];
            accountList.splice(accountIndex, 1);
            return accountList;

        default:
            return state;
    }

}

export default accountsReducer;