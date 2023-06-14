
import React from 'react';
import { Header } from './components/Header/Header';
import './global.css';

import { ClerkProvider } from "@clerk/clerk-react";

if (!import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
 
  return (
    <>
      <ClerkProvider publishableKey={clerkPubKey}>

    

          <Header />

       

      </ClerkProvider>
     


      

      
     
    </>
  )
}

export default App
