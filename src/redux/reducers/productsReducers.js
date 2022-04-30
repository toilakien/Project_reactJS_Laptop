import products from '../../products/DataProducts';
import {    FILTER_IN_PRICE,
            FILTER_IN_TITLE, 
            FIND_ASUS, 
            FIND_DEV, 
            FIND_LENOVO, 
            FIND_MACBOOK, GET_DATA, BAN_CHAY, 
            SEARCH_INPUT, ON_TO_CART, 
            REMOVE_ITEM_ON_CART 
    } from '../constants/constants';
export const initState = {
    dataproducts: [
        ...products
    ],
    category: [],
    cart: []
}
export const productReducer = (state = initState, action) => {
    switch (action.type) {

        case FILTER_IN_PRICE: {

            const filterProduct = state.dataproducts.filter((product) => {

                return product.price < action.payload
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...filterProduct]
            }
            return state
        }
        case FILTER_IN_TITLE: {
            const arr = state.dataproducts

            const arrTitle = arr.map((a) => {
                return a.title;
            })
            const softTit = arrTitle.soft();
        }
        case FIND_ASUS: {
            const products = state.dataproducts;
            const findAsus = products.filter((product) => {
                return product.title.match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...findAsus]
            }
            return state
        }
        case FIND_LENOVO: {
            const products = state.dataproducts;
            const findLenovo = products.filter((product) => {
                return product.title.match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...findLenovo]
            }
            return state
        }
        case FIND_MACBOOK: {
            const products = state.dataproducts;
            const findMacbook = products.filter((product) => {
                return product.title.match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...findMacbook],

            }
            return state
        }
        case FIND_DEV: {
            const products = state.dataproducts;
            const findDev = products.filter((product) => {
                return product.title.match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...findDev]
            }
            return state
        }
        case GET_DATA: {
            state = {
                ...state,
                category: { ...state.dataproducts[action.payload - 1] }
            }
            return state;
        }
        case BAN_CHAY: {
            const products = state.dataproducts;
            const banChay = products.filter((product) => {
                return product.sold > action.payload;
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...banChay]
            }
            return state
        }
        case SEARCH_INPUT: {
            const products = state.dataproducts;
            const search = products.filter((product) => {
                return product.title.toLowerCase().match(action.payload);
            })
            state = {
                ...state,
                dataproducts: [...products],
                category: [...search]
            }
            return state;
        }
        case ON_TO_CART:
            const item = state.products.find(
              (product) => product.id === action.payload.id
            );
            const inCart = state.cart.find((item) =>
              item.id === action.payload.id ? true : false
            );
      
            return {
              ...state,
              cart: inCart
                ? state.cart.map((item) =>
                    item.id === action.payload.id
                      ? { ...item, qty: item.qty + 1 }
                      : item
                  )
                : [...state.cart, { ...item, qty: 1 }],
            };
          case REMOVE_ITEM_ON_CART:
            return {
              ...state,
              cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        default:
            return state;
    }
}   
