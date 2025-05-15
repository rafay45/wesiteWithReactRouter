import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Company, { rankInfo } from './components/Company.jsx'
import User from './components/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element ={<App />}>
    <Route path='' element ={<Home />} /> 
    <Route path='about' element ={<About />} />
    <Route path='contact' element ={<Contact />} />
    <Route path='name/:userid' element ={<User />} />
    <Route 
    loader={rankInfo}
     path='company'
     element ={<Company />}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
