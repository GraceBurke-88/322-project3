
const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_TASKS':
      return action.payload;
    case 'ADD_TASK':
      return [
        ...state,
        { name: action.payload, _id: state.length + 1 }
      ]
    case 'MARK_DONE':
      const taskIndex = state.findIndex(t => t._id === action.payload);
      let taskList = [ ...state ];
      taskList.splice(taskIndex, 1);
      return taskList;

    default:
      return state;
  }
}

export default tasksReducer;