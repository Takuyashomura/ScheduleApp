import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';
import DayjsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middrware = [thunk];

const store = createStore( rootReducer, composeEnhancers(applyMiddleware(...middrware)) );

ReactDOM.render(
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
    <App/>
    </MuiPickersUtilsProvider>
  </Provider>,
  document.getElementById('root'));
