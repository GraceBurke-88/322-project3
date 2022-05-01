import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import AddTask from './AddTask';
import { setTasks, tasksError, accountsError } from "../actions";
import PageTabs from './PageTabs';
import Page1 from './Page1';
import Page2 from './Page2';



class App extends React.Component {


  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/accounts')
      .then(response => {
        this.props.setTasks(response.data);
        console.log(response.data)
      }).catch(error => {
        this.props.tasksError();
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

    switch (view) {
      case 'page1':
        return (this.wrapPage(
            <Page1 />
        ));
      case 'page2':
        return (this.wrapPage(
            <Page2 />
        ));

      default:
        return (this.wrapPage(
            <h2>Invalid Tab, choose another</h2>
        ));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errors.getTasks
  };
}

export default connect(mapStateToProps, { setTasks, tasksError, accountsError })(App);