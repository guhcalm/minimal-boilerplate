import { ActionsEnum, StateInterface } from "../../interfaces"
import { reducers } from "./actions"

export default (
  state: StateInterface,
  action: { type: ActionsEnum; payload: any }
) => reducers[action.type](state, action)

export { default as actions } from "./actions"
export { default as initialState } from "./initialState"
