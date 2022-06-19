import { ActionsEnum, StateInterface, ThemesEnum } from "../../interfaces"
import { ThemesStyles } from "../../styles"

const { LIGHT, DARK } = ThemesEnum
const { SWITCH_THEME } = ActionsEnum
const { Light, Dark } = ThemesStyles

export default {
  dispatchers: {
    switchTheme: () => ({ type: SWITCH_THEME })
  },
  reducers: (state: StateInterface, action: { payload: any }) => ({
    [SWITCH_THEME]: () => ({
      ...state,
      theme: state.theme.name === DARK ? Light : Dark
    })
  })
}
