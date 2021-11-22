const faker = require('faker')

const mount = (el) => {
    const cart = `<div>You have ${faker.random.number()} your cart</div>`
    el.innerHTML = cart
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart')
    if (el) {
        mount(el)
    }
}

export {mount}