import  React  from "react";
import { createContext, useContext, useReducer } from "react";


//preparing the data layout
export const StateContext = createContext();

export const StateProvider=({
    reducer, initialState, children
}) =>
     (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );


//hook which allows us to pull information from the data layer

export const useStateValue = () => useContext(StateContext);