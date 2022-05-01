import React from 'react';
import AddTask from './AddTask';
import TaskList from "./TaskList";

const Page1 = props => {
    return (
        <div className="page-one">
            <h1>Page 1: Display By Default</h1>
            <AddTask/>
            <TaskList />
        </div>
    )
}

export default Page1;