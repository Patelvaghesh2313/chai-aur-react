import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import { Home } from './components/Home/Home.jsx'
import { AboutUs } from './components/AboutUs/AboutUs.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { User } from './components/User/User.jsx'
import Github, { githubDetails } from './components/Github/Github';

/*
One Way To Manage Routing
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])
*/

// Another Way to handle Routers
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />}>
      <Route path='' element= {<Home />} />
      <Route path='about-us' element= {<AboutUs />} />
      <Route path='contact' element= {<Contact />} />
      <Route path='user/:id' element= {<User />} />
      <Route
       loader = { githubDetails}
       path='github'
       element= {<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
