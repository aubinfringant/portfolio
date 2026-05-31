import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar         from './components/Navbar.jsx'
import Footer         from './components/Footer.jsx'
import CodeBackground from './components/CodeBackground.jsx'
import Home           from './pages/Home.jsx'
import ProjectDetail  from './pages/ProjectDetail.jsx'
import NotFound       from './pages/NotFound.jsx'

export default function App() {
  return (
    <BrowserRouter>
      {/* Arrière-plan animé — derrière tout */}
      <CodeBackground />

      {/* Contenu par-dessus */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/"             element={<Home />} />
            <Route path="/projet/:slug" element={<ProjectDetail />} />
            <Route path="*"             element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
