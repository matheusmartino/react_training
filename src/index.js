import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Release from './container/Release';
import Backlog from './container/Backlog';
import Sprint from './container/Sprint';
import Home from './container/Home';

ReactDOM.render(
    <Router history={hashHistory}>
    {/* Rotas aninhadas, tudo q estiver dentro de App será carregado nas filhas */}
        <Route path='/' component={App}>
        {/* Carregamento default de algum component que queira ser exibido */}
        <IndexRoute component={Home}/>
        {/* Rotas Filhas */}
            <Route path='Release' component={Release} />
            <Route path='Backlog' component={Backlog} />
            <Route path='Sprint' component={Sprint} />
        </Route>
    </Router>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
