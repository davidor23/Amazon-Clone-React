//Set up Data Layer
//Tracking of the basket

import React, {createContext, useContext, useReducer} from 'react'
//THIS IS THE DATA LAYER
export const StateContext = createContext();

//Create Provider, wrap entire app in provider to give access to the data layer

//Provider

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//This is how it is used inside of a component
export const useStateValue = () => useContext(StateContext);