import React from 'react';



const TransactionItem = props => {


    return (
        <li className="list-group-item" style={{}}>
            <button type="button"
                    onClick={() => props.selectAccount(props.transaction)}
                    className="btn btn-link" style={{  }}>
                <h5>account: { props.transaction.accountId}</h5>
            </button>

            <div style={{marginTop:0, display:"inline-flex"}}>
                <br/> Type: { props.transaction.type}
                <br/> Amount: ${ props.transaction.amount}
                <br/> Name: { props.transaction.name}

            </div>






        </li>
    )
};

export default TransactionItem;