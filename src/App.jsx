import { BrowserRouter, Routes ,Route} from "react-router-dom"
import Navbar from "./Navbar"
import Body from "./Body"
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
