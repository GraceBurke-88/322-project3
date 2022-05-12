import React from 'react';
import { Link } from 'react-router-dom';

import './PageTabs.css';

class PageTabs extends React.Component {
    state = { currentPage: '/' }

    isActiveTab(tabName) {
        return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        this.setState({ currentPage: tabName })
    }

    render () {
        return (
            <ul className='nav page-tabs'>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/')} to="/"
                          onClick={event => this.onTabClick(event, '/')}>
                        Grid View
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/page2')} to="/page2"
                          onClick={event => this.onTabClick(event, '/page2')}>
                        List View
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link className={this.isActiveTab('/page3')} to="/page3"
                          onClick={event => this.onTabClick(event, '/page3')}>
                        Add Task
                    </Link>
                </li>
            </ul>
        )
    }

};

export default PageTabs;