import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/Newincident';

export default function Routes() {
    return (
        <section className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Logon}/>
                    <Route path="/register" component={Register}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/incident/new' component={NewIncident}/>
                </Switch>
            </BrowserRouter>
        </section>
    );
}