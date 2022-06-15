import { useParams } from "react-router-dom"
import Container from "./styles"

export default () => {
  const { id } = useParams()
  return <Container data-home="">Home Page {id}</Container>
}
