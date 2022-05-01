import React from 'react';

const TaskItem1 = props => {
  return (

    <li className="list-group-item" style={{}}>
      <h3>{ props.task.name }</h3>
      <br/> Balance: <n/>
      { props.task.balance }
      <button type="button"
              onClick={() => props.markDone(props.task)}
              className="btn btn-primary" style={{ float: 'right' }}>
        Done
      </button>
        </li>

  )
};

export default TaskItem1;