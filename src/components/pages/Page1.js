import React from 'react';
import AccountList from "../AccountList";

const Page1 = props => {
    return (
        <div className="page-one">
            <h1>Bank Accounts</h1>
            <AccountList />
        </div>
    )
}

export default Page1;