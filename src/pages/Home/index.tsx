import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCustomContext } from "../../hooks"
import Container from "./styles"

export default () => {
  const { id } = useParams()
  const { dispatch, actions } = useCustomContext()
  useEffect(() => {
    dispatch(actions.setLightTheme())
  }, [])
  return <Container data-home="">Home Page {id}</Container>
}
