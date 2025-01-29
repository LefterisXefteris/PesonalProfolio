import { Provider } from "@/components/ui/provider"
import React from "react"

import { About } from "./About"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route, Link } from "react-router-dom"
import { Home } from "./Home"

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

const Navigation = () => (

  <nav className="p-4">
    <Link to="/" className="mr-4">Home</Link>
    <Link to="/about">About</Link>
  </nav>

)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <HashRouter>
      <Provider>
        <Navigation />
        <Routes>   
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Provider>
    </HashRouter>
    </QueryClientProvider>
  </React.StrictMode>
)