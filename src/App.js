import Register from "./components/register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
