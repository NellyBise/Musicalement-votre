import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../../public/Logo.png'
import { useState, useEffect } from 'react'

export default function Header() {
  const links = [
    {
      name: 'accueil',
      route: '/',
    },
    {
      name: 'à propos',
      route: '/apropos',
    },
    {
      name: 'prestations',
      route: '/prestations',
    },
    {
      name: 'matériel',
      route: '/materiel',
    },
    {
      name: 'médiathèque',
      route: '/mediatheque',
    },
  ]

  const [isOpen, setIsOpen] = useState(false)
  function toggle() {
    if (window.innerWidth <= 1024) {
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="fixed top-0 z-40 w-screen h-20 px-5 border-inline-b-4 border-transparent flex items-center justify-between bg-light-color drop-shadow-lg">
      <NavLink
        to="/"
        className="flex items-center gap-2"
        aria-label="Cliquer pour revenir à l'accueil"
      >
        <img src={logo} alt="" className="h-16" />
        <h1 className="text-4xl font-bold text-title-color font-arabella">
          Musicalement Votre
        </h1>
      </NavLink>
      <div
        className={`lg:flex lg:static lg:h-20 lg:w-max lg:bg-transparent fixed left-0 top-20 w-full h-screen bg-light-color overflow-hidden transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none lg:pointer-events-auto lg:opacity-100 lg:translate-y-0'
        }`}
        style={{ zIndex: isOpen ? 10 : -1 }}
      >
        <nav
          id="menu"
          className="text-xl text-main-color uppercase flex flex-col items-center mt-16 text-main-color py-8 lg:mt-0 lg:flex-row"
        >
          <ul className="flex flex-col lg:flex-row items-center h-full gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.route}
                  onClick={toggle}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-title-color lg:border-b-title-color lg:border-b-4 pb-[23px]'
                      : 'hover:text-title-color lg:border-b-transparent lg:border-b-4 pb-[23px] lg:hover:border-b-title-color duration-500'
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <HashLink
                smooth
                to="/#contact"
                onClick={toggle}
                className="hover:text-title-color lg:border-b-transparent lg:border-b-4 pb-[23px] lg:hover:border-b-title-color duration-500"
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="lg:hidden">
        <button
          className="w-10 h-10 relative focus:outline-none bg-light-color"
          onClick={toggle}
        >
          <span className="sr-only">Ouvrir le menu de navigation</span>
          <div className="block w-8 h-8 relative ">
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-0 w-8 h-1 bg-main-color transform transition duration-500 ease-in-out ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-0 w-8 h-1 bg-main-color transform transition duration-500 ease-in-out ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-0 w-8 h-1 bg-main-color transform transition duration-500 ease-in-out ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  )
}
