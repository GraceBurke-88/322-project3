import React from 'react';

import axios from 'axios';
import { connect } from 'react-redux';

import {setAccounts, accountsError, setTransactions} from "../actions";
import PageTabs from './pages/PageTabs';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';


class App extends React.Component {

  componentDidMount() {
    this.getData();

  }

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
          this.props.setAccounts(response.data);
          console.log(response.data)
        }).catch(error => {
      this.props.accountsError();
    });

    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/transactions')
        .then(response => {
          this.props.setTransactions(response.data);
        }).catch(error => {

    });

  }



  state = {
    view: 'page1'
  }

  onViewChange(view) {
    this.setState({ view });
  }

  wrapPage(jsx) {
    const { view } = this.state;
    return (
        <div className="container">
          <PageTabs currentView={view}
                    onViewChange={this.onViewChange.bind(this)}/>
          {jsx}
        </div>
    );
  }

  render() {
    const { view } = this.state;
    console.log(this.state)

    switch (view) {
      case 'page1':
        return (this.wrapPage(<Page1 />));
      case 'page2':
        return (this.wrapPage(<Page2 />));
      case 'page3':
        return (this.wrapPage(<Page3 />));
      case 'page4':
        return (this.wrapPage(<Page4 />));
      default:
        return (this.wrapPage(
            <h2>Invalid Tab, choose another</h2>));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errors.getAccounts
  };
}

export default connect(mapStateToProps, {  setAccounts, accountsError, setTransactions })(App);