// import { createContext, useReducer } from "react";


// export const CartcontextProvider = createContext()
// export const context = (props) => {
//     const reducer = ( state, action) => {
//         switch(action.type) {
//             case 'ADD':
//                 return [...state, action.payload]
//             default:
//                 return state
//         }
//     }
//     const [ state, dispatch] = useReducer(reducer, [])
//     const info = { state , dispatch}
//     return(
//         <Cartcontext.Provider value={info}>{props.children}</Cartcontext.Provider>
//     )
// }