import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import App from './App';
import { reducer, reducer2 } from './reducers';

import * as serviceWorker from './serviceWorker';

const rootReducers = combineReducers({reducer, reducer2})
const store = createStore(rootReducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
