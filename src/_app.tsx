import { Routes, Route } from "react-router-dom"
import { App } from "./containers"
import { Home } from "./pages"

const MyApp = () => (
  <App>
    <Routes>
      <Route path="/:id" element={<Home />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </App>
)

export default MyApp
