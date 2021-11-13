import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import ListUser from './pages/listUser'
import EditUser from './pages/EditUser'

export default function Routes() {
    return (
        // Switch faz com que cada rota seja acessada apenas uma vez, nunca acessará duas rotas ao mesmo tmepo
        <BrowserRouter>
         <Switch>
             <Route path="/" exact component={Login}/> {/** exact => para q chame exatamente essa rota apenas com a /, para q não entenda outa coisa e gere erro */}
             <Route path="/listuser" component={ListUser}/>
             <Route path="/edituser" component={EditUser}/>
         </Switch>
        </BrowserRouter>
    );
}