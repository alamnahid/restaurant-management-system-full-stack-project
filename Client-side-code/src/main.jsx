import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Provider/AuthProvider';
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <Toaster />
     <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
