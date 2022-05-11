
export const setAccounts = accounts => {
  return {
    type: 'SET_ACCOUNTS',
    payload: accounts
  }
};

export const addAccount = (name, balance, _id) => {
  return {
    type: 'ADD_ACCOUNT',
    payload: {
      _id, name, balance
    }
  }
}

export const deleteAccount = (accountId) => {
  return {
    type: 'DELETE_ACCOUNT',
    payload: accountId
  }
}

export const accountsError = errorMessage => {
  return {
    type: 'ACCOUNTS_ERROR'
  }
};

export function selectAccount(accountId){
  return {
    type: 'ACCOUNT_SELECTED',
    payload: accountId
  }
}

export const deposit = ( _id, amount) => {
  return {
    type: 'DEPOSIT',
    payload: {
      _id, amount
    }
  }
}

export const withdraw = ( _id, amount) => {
  return {
    type: 'WITHDRAW',
    payload: {
      _id, amount
    }
  }
}