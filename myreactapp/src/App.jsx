import './App.css'
import Nabvar from './navbar.jsx'
import Home from './home.jsx'
import Contact from './contact.jsx'
import Email from './email.jsx'
import Names from './names.jsx'
import Images from './images.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
<link href="/src/styles.css" rel="stylesheet"></link>
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Nabvar /><Home/></>
    },
    {
      path: "/Contact",
      element: <><Nabvar /><Contact/></>
    },
    {
      path: "/email",
      element: <><Nabvar /><Email/></>
    },
    {
      path: "/names",
      element: <><Nabvar /><Names/></>
    },
    {
      path: "/images",
      element: <><Nabvar /><Images/></>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
