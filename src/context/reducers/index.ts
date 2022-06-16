import { ActionsEnum, StateInterface } from "../../interfaces"
import actions from "./actions"

export default (
  state: StateInterface,
  action: { type: ActionsEnum; payload: any }
) => actions.reducers[action.type](state, action)

// aliases
export const { dispatchers } = actions
export { default as initialState } from "./initialState"
