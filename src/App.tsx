import { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import type { Technology } from './types'
import Header from './components/Header'
import Hero from './components/Hero'
import TechnologyCard from './components/TechnologyCard'
import StackSidebar from './components/StackSidebar'
import Footer from './components/Footer'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [selected, setSelected] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/data/technologies.json')
        const data: Technology[] = await response.json()
        setTechnologies(data)
      } catch (error) {
        console.error('Failed to load technologies:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTechnologies()
  }, [])

  const selectedIds = useMemo(() => new Set(selected.map((item) => item.id)), [selected])

  const addToStack = (technology: Technology) => {
    if (selectedIds.has(technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setSelected((current) => [...current, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (id: string) => {
    const item = selected.find((technology) => technology.id === id)
    setSelected((current) => current.filter((technology) => technology.id !== id))
    if (item) toast.info(`${item.name} removed from your stack.`)
  }

  const removeAll = () => {
    if (selected.length === 0) return
    setSelected([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />

        <section className="technology-section" id="technologies">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explore the <span>Technologies</span></p>
              <p className="section-subtitle">Pick the tools and technologies you need to build your next project.</p>
            </div>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="spinner" />
              <p>Loading technologies...</p>
            </div>
          ) : (
            <div className="builder-layout">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    added={selectedIds.has(technology.id)}
                    onAdd={() => addToStack(technology)}
                  />
                ))}
              </div>

              <StackSidebar
                selected={selected}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>

        <section className="projects-section" id="projects">
          <div className="projects-box">
            <div>
              <p className="eyebrow">Build with confidence</p>
              <h2>Turn your technology choices into a <span>real stack.</span></h2>
              <p>Choose the tools that match your project and keep your development stack simple, focused, and ready to build.</p>
            </div>
            <a className="primary-button" href="#technologies">Explore Technologies</a>
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2200} hideProgressBar />
    </div>
  )
}

export default App
