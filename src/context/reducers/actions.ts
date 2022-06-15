import { ActionsEnum } from "../../interfaces"
import { ThemesStyles } from "../../styles"

const { SET_LIGHT_THEME, SET_DARK_THEME } = ActionsEnum
const meta = document.querySelector("[name='theme-color']") as HTMLMetaElement
meta.content = ThemesStyles.Dark.palette.background.main

export const reducers = {
  [SET_LIGHT_THEME]: state => {
    meta.content = ThemesStyles.Light.palette.background.main
    return { ...state, theme: ThemesStyles.Light }
  },
  [SET_DARK_THEME]: state => {
    meta.content = ThemesStyles.Dark.palette.background.main
    return { ...state, theme: ThemesStyles.Dark }
  }
}

export default {
  [SET_LIGHT_THEME]: () => ({ type: SET_LIGHT_THEME }),
  [SET_DARK_THEME]: () => ({ type: SET_DARK_THEME })
}
