import { createContext, ReactNode, useReducer } from "react"
import { rootReducer, initialState } from ".."

export const StateContext = createContext<any>(null)

export default ({ children }: { children: ReactNode }) => (
  <StateContext.Provider value={useReducer(rootReducer, initialState)}>
    {children}
  </StateContext.Provider>
)
