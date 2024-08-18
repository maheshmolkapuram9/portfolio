import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// Layouts
import RootLayout from "./Layouts/RootLayout";
import Home from "./Layouts/Home";
import Work from "./Layouts/Work";
import Contact from "./Layouts/Contact";
import About from "./Layouts/About";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="work" element={<Work/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router}/>
  )
    
}

export default App;
