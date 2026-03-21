import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-dvh bg-cream text-black">
      <Navbar />
      <HomePage />
      <main className="mx-auto max-w-3xl px-6 pb-20">
        <AboutPage />
        <SkillsPage />
        <ContactPage />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Abijith Vignesh. All rights reserved.</p>
          <a className="hover:text-black" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
