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
    const observers = navItems.map(({ id, path }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
            history.replaceState(null, '', path)
          }
        },
        { rootMargin: '-20% 0px -75% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
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
