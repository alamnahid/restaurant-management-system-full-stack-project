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
import {HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <Toaster />
     <RouterProvider router={router} />
   </QueryClientProvider>
    </AuthProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
