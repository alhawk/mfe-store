import React from 'react'
import reactDOM from 'react-dom'
import App from './App.js'

const mount = (el) => {
    reactDOM.render(<App/>, el)
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el)
    }
}

export {mount}

