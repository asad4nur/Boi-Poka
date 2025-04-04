import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import ListBooks from './Components/ListBooks/ListBooks';
import PageToRead from './Components/PageToRead/PageToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import React from 'react';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/ListBooks',
        element: <ListBooks></ListBooks>,
        loader: () => fetch('/booksData.json'),
      },
      {
        path: 'books/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json')
      },
      {
        path:'/pagetoread',
        element: <PageToRead></PageToRead>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
