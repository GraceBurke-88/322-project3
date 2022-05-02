import React from 'react';
import AddTask from '../AddAccount';
import TaskList from "../AccountList";

const Page1 = props => {
    return (
        <div className="page-one">
            <h1>Page 1: Display By Default</h1>
            <TaskList />
        </div>
    )
}

export default Page1;