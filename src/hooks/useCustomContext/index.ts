import { useContext } from "react"
import { StateContext, actions } from "../../context"
import { StateInterface } from "../../interfaces"

export default () => {
  const [state, dispatch] = useContext(StateContext)
  return {
    state: state as StateInterface,
    dispatch,
    actions
  }
}
