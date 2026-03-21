import { useState, useEffect } from 'react'

const navItems = [
  { id: 'top',     label: 'Home',     path: '/'        },
  { id: 'about',   label: 'About me', path: '/about'   },
  { id: 'skills',  label: 'Skills',   path: '/skills'  },
  { id: 'contact', label: 'Contact',  path: '/contact' },
]

function scrollToSection(id: string, path: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  history.pushState(null, '', path)
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35
      let current = navItems[0].id

      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      }

      const item = navItems.find(({ id }) => id === current)
      if (item) {
        setActiveSection(current)
        history.replaceState(null, '', item.path)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (id: string) =>
    activeSection === id
      ? 'font-semibold text-black cursor-pointer'
      : 'text-gray-400 hover:text-black cursor-pointer'

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-gray-100 flex items-center justify-center px-6 py-5">
      <nav className="flex gap-10 text-sm">
        {navItems.map(({ id, label, path }) => (
          <a
            key={id}
            className={linkClass(id)}
            onClick={(e) => { e.preventDefault(); scrollToSection(id, path) }}
            href={path}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
