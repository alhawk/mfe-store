import React from 'react'
import reactDOM from 'react-dom'
import {createMemoryHistory, createBrowserHistory} from 'history'
import App from './App.js'
import store from './store/index'
import {Provider} from 'react-redux'

const mount = (el, {onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })
    if (onNavigate) {
        history.listen(onNavigate)
    }

    reactDOM.render(
        <Provider store={store}>
            <App history={history}/>
        </Provider>
    , el)

    return {
        onParentNavigate ({pathname: nextPathname}) {
            console.log('container navigate')
            const {pathname} = history.location
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el, {defaultHistory: createBrowserHistory()})
    }
}

export {mount}

