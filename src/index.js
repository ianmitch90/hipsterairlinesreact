import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Baselayout from './components/Baselayout.js'








const loadingReducer = (state = false, action) => {
  if (action.type === 'START_LOADING'){
    return true;
  }
  if (action.type === 'STOP_LOADING') {
    return false;
  }
  return state
}

const reducer = combineReducers({
  loading: loadingReducer
})

/* this is how we can get thunk and our Devtools to work */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)


store.subscribe( () => console.log("STATE", store.getState()))
store.dispatch({type: "@@INIT@@"})


ReactDOM.render(<Provider store={store}>
  <MuiThemeProvider>
    <BrowserRouter>
      <Baselayout>
        <Switch>
          <Route exact="exact" path='/' component={App}/>

        </Switch>
      </Baselayout>
    </BrowserRouter>
  </MuiThemeProvider>

</Provider>, document.getElementById('root'));
registerServiceWorker();
