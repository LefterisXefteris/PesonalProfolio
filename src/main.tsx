import { Provider } from "@/components/ui/provider"
import React from "react"
import { UserRepos } from './Dashboard'
import { About } from "./About"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route, Link } from "react-router-dom"

const Navigation = () => (
  <nav className="p-4">
    <Link to="/" className="mr-4">Home</Link>
    <Link to="/about">About</Link>
  </nav>
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider>
        <Navigation />
        <Routes>  
          <Route path="/" element={<UserRepos />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
)