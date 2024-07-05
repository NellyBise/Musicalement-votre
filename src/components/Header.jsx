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
    <header className="w-screen h-full py-2 px-4 border-b-4 border-transparent flex flex-col items-center justify-center bg-light-color drop-shadow-lg">
      <NavLink to="/" className="flex gap-4">
        <img src={logo} alt="" className="h-24 mb-2" />

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold text-title-color font-arabella">
            Musicalement Votre
          </h1>
          <h2 className="text-main-color text-center text-2xl">
            DJ - KARAOKÉ - ANIMATION
          </h2>
        </div>
      </NavLink>
      <nav>
        <ul className="flex gap-16 text-xl text-main-color uppercase mt-8">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.route}
                className={({ isActive }) =>
                  isActive
                    ? 'text-title-color border-b-title-color border-b-4 pb-2'
                    : 'hover:text-title-color border-b-transparent border-b-4 hover:border-b-title-color pb-2 origin-left duration-500'
                }
              >
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <HashLink
              smooth
              to="/#contact"
              className="hover:text-title-color border-b-transparent border-b-4 hover:border-b-title-color pb-2 duration-500"
            >
              Contact
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
