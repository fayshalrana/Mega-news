import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PostsProvider from '../utils/Posts/PostsProvider.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/index.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostsProvider>
    <RouterProvider router={router} />
    </PostsProvider>
  </React.StrictMode>
)
