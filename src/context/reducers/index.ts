import { ActionsEnum, StateInterface } from "../../interfaces"
import { ThemesStyles } from "../../styles"

const { SET_LIGHT_THEME, SET_DARK_THEME } = ActionsEnum
const meta = document.querySelector("[name='theme-color']") as HTMLMetaElement

const reducers = {
  [SET_LIGHT_THEME]: state => {
    meta.content = ThemesStyles.Light.palette.background.main
    return { ...state, theme: ThemesStyles.Light }
  },
  [SET_DARK_THEME]: state => {
    meta.content = ThemesStyles.Dark.palette.background.main
    return { ...state, theme: ThemesStyles.Dark }
  }
}

export default (
  state: StateInterface,
  action: { type: ActionsEnum; payload: any }
) => reducers[action.type](state, action)

export const actions = {
  [SET_LIGHT_THEME]: () => ({ type: SET_LIGHT_THEME }),
  [SET_DARK_THEME]: () => ({ type: SET_DARK_THEME })
}

export const initialState: StateInterface = {
  theme: ThemesStyles.Light
}
