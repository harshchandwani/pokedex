import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse';
import Modal from './Modal';
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />
    },
    {
      path: "/pokemon/:pokemonName",
      element: <Modal />
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;