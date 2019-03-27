import React, {Component} from 'react';
import Header from './components/header';
import {Route, Switch} from 'react-router-dom';
import Creation from './components/creation';
import CreationList from './components/creationList';
import Editing from './components/editing';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/creation' component = {Creation} />
                    <Route path='/editing' component = {Editing} />
                    <Route path='/creationList' component = {CreationList} />
                </Switch>
            </div>
        );
    };
}

export default App;
