import { FILTER_IN_PRICE,
    FILTER_IN_TITLE, FIND_ASUS,
    FIND_MACBOOK, FIND_DEV,
    FIND_LENOVO, 
    GET_DATA ,
    BAN_CHAY,
    SEARCH_INPUT,
    ON_TO_CART,
    REMOVE_ITEM_ON_CART
    } from '../constants/constants';
export const onSoftProduct=payload=>{
return {
    type:FILTER_IN_PRICE,
    payload
}  
}
export const onSoftTitle=payload=>{
return {
    type:FILTER_IN_TITLE,
    payload
}  
}
export const getItemProduct=()=>{

}
export const findAsus=payload=>{
return{
    type:FIND_ASUS,
    payload
}
}
export const findMacbook=payload=>{
return{
    type:FIND_MACBOOK,
    payload
}
}
export const findDev=payload=>{
return{
    type:FIND_DEV,
    payload
}
}
export const findLenovo=payload=>{
return{
    type:FIND_LENOVO,
    payload
}
}
export const getDataProduct=payload=>{
return{
    type:GET_DATA,
    payload
}
}
export const onBanChay=payload=>{
return{
    type:BAN_CHAY,
    payload
}
}
export const onSearchInput=payload=>{
return {
    type:SEARCH_INPUT,
    payload
}
}
export const onToCart=itemId=>{
return{
    type:ON_TO_CART,
    payload:{
        id:itemId
    }
}
}
export const removeItemCart=itemId=>{
return {
    type:REMOVE_ITEM_ON_CART,
    payload:{
        id:itemId
    }
}
}

