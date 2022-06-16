import { ActionsEnum, ThemesEnum } from "../../interfaces"
import { ThemesStyles } from "../../styles"

const meta = document.querySelector("[name='theme-color']") as HTMLMetaElement
meta.content = ThemesStyles.Dark.palette.background.main
const { Light, Dark } = ThemesStyles
const { LIGHT, DARK } = ThemesEnum
const { SWITCH_THEME } = ActionsEnum

export default {
  dispatchers: {
    switchTheme: () => ({ type: SWITCH_THEME })
  },
  reducers: {
    [SWITCH_THEME]: state => ({
      ...state,
      theme: state.theme.name === DARK ? Light : Dark
    })
  }
}
