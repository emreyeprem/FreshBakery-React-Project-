import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Switch, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './components/Search'
import About from './components/About'
import Login from './components/Login'
import Register from './components/Register'
import HomePage from './components/HomePage'
import Products from './components/Products'
import SubCategories from './components/SubCategories'
import { createStore } from 'redux'
import reducer from './store/reducer'
import { Provider } from 'react-redux'
import history from './history';

let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(

  <Provider store = {store}>
 <Router history={history}>
 <BaseLayout >

   <Switch>
     <Route exact path="/" component={HomePage} />
     <Route path="/search" component={Search} />
     <Route path="/login" component={Login}/>
     <Route path="/register" component={Register}/>
     <Route path="/about" component={About}/>
     <Route path="/categories" component={Products} />
     <Route path="/sub-categories" component={SubCategories} />

   </Switch>

 </BaseLayout>
 </Router>
 </Provider>



  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
