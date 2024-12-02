import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
