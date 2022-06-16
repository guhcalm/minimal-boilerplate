import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCustomContext } from "../../hooks"
import Container, { Button } from "./styles"

export default () => {
  const { id } = useParams()
  const { dispatch, actions } = useCustomContext()
  useEffect(() => {
    dispatch(actions.switchTheme())
    dispatch(actions.switchTheme())
  }, [])
  return (
    <Container data-home="">
      Home Page {id}
      <Button />
    </Container>
  )
}
