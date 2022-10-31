import Home from "./pages/Home.page"
import DetailsPage from "./pages/Details.page.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (


        <Routes>
          <Route path='/' element={ <Home/>}/>

            <Route path=':invoId' element={<DetailsPage/>}/>

        </Routes>



  )
}

export default App
