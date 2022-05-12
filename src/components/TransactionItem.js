import React from 'react';



const TransactionItem = props => {

    return (
        <li className="list-group-item" style={{}}>

            <br/> Name:{ props.transaction}

        </li>

    )
};

export default TransactionItem;