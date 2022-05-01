import React from 'react';
import { connect } from 'react-redux';
import { markDone } from '../actions';

import TaskItem1 from './TaskItem1';

class TaskList extends React.Component {

  markDone = (task) => {
    this.props.markDone(task._id);
  }

  render() {
    const taskItems = this.props.tasks.map(task => {
      return <TaskItem1 task={task} key={task._id} markDone={this.markDone} />
    });

    return (
      <ul className="task-list list-group">
          { taskItems }
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps, { markDone })(TaskList);