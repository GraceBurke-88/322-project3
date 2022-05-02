
export const setTasks = tasks => {
  return {
    type: 'SET_TASKS',
    payload: tasks
  }
};

export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    payload: text
  }
}

export const markDone = (taskId) => {
  return {
    type: 'MARK_DONE',
    payload: taskId
  }
}

export const tasksError = errorMessage => {
  return {
    type: 'TASKS_ERROR'
  }
};

//new

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
