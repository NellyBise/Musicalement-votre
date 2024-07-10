import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../../public/Logo.png'

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
      route: '/mediatheque/photos',
    },
  ]

  return (
    <header className="fixed top-0 z-40 w-screen h-20 px-8 border-b-4 border-transparent flex items-center justify-between bg-light-color drop-shadow-lg">
      <NavLink to="/" className="flex items-center gap-4">
        <img src={logo} alt="" className="h-16" />
        <h1 className="text-4xl font-bold text-title-color font-arabella">
          Musicalement Votre
        </h1>
      </NavLink>
      <nav>
        <ul className="flex items-center h-20 gap-16 text-xl text-main-color uppercase">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.route}
                className={({ isActive }) =>
                  isActive
                    ? 'text-title-color border-b-title-color border-b-4 pb-6'
                    : 'hover:text-title-color border-b-transparent border-b-4 pb-6 hover:border-b-title-color duration-500'
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
              className="hover:text-title-color border-b-transparent border-b-4 pb-6 hover:border-b-title-color pb-2 duration-500"
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
