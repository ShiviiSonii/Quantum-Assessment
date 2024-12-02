import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import Protected from "./pages/Protected.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/protected' element={<Protected/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
