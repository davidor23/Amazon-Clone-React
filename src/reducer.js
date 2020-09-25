import Product from "./Product";
import CheckoutProduct from "./CheckoutProduct";
import React from "react";

export const initialState = {
    basket:[],
    user:null,
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case"SET_USER":
            return {
                ...state,
                user:action.user
            };
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            //Logic for Removing item from basket

            //Cloned the basket
            let newBasket = [...state.basket];

            //Check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0){
                //item exists, remove it
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    'Can\'t remove product (id: ${action.id}) as it\s not present'
                )
            }
            //Create new basket after actions performed and items removednp
            return{...state, basket: newBasket};
        default:
                return state;
    }
};
export default reducer;
//Allows to use reducer in other areas of app
