import {mount as mountProduct} from 'products/ProductsIndex';
import {mount as mountCart} from 'cart/CartIndex';


mountProduct(document.querySelector('#my-products'))
mountCart(document.querySelector('#my-cart'))