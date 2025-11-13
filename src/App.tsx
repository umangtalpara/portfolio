import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Home } from '@/pages/Home'
import { Experience } from '@/pages/Experience'
import { Projects } from '@/pages/Projects'
import { Skills } from '@/pages/Skills'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'
import { SEO } from '@/components/SEO'
import { siteContent } from '@/content/site'

/**
 * Main App component with routing
 */
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <SEO
            title={siteContent.seo.title}
            description={siteContent.seo.description}
            keywords={siteContent.seo.keywords}
          />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
