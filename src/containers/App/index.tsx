import { ReactNode } from "react"
import { useCustomContext } from "../../hooks"
import Container from "./styles"

export default ({ children }: { children: ReactNode }) => {
  const { state } = useCustomContext()
  return (
    <Container data-app="" palette={state.theme.palette}>
      {children}
    </Container>
  )
}
