// Importing all the needed libraries. 
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// Importing Application component. 
import App from './App'
import reducers from './reducers'

// Importing all the needed modules. 
import './index.css'


// Initiating redux. 
const store = createStore(reducers, compose(applyMiddleware(thunk)))

// Rendering the react application to the needed html file. 
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
)