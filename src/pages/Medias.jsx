import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Medias() {
  return (
    <section className="flex flex-col items-center mx-auto my-12 mt-24 max-w-[1440px] min-h-screen px-8">
      <h2 className="text-4xl text-main-color text-center font-bold uppercase my-12">
        Bienvenue dans la Médiathèque !
      </h2>
      <p className="text-main-color text-l mb-12">
        Explorez ma collection de photos, vidéos et musiques. Choisissez le type
        de média que vous souhaitez découvrir :
      </p>
      <nav className="mb-16">
        <ul className="flex gap-8 uppercase text-main-color text-xl">
          <NavLink
            to="/mediatheque/photos"
            className={({ isActive }) =>
              isActive
                ? 'p-2 rounded bg-main-color text-white'
                : 'bg-light-blue p-2 rounded hover:bg-main-color hover:text-white duration-500'
            }
          >
            <li>photos</li>
          </NavLink>
          <NavLink
            to="/mediatheque/videos"
            className={({ isActive }) =>
              isActive
                ? 'p-2 rounded bg-main-color text-white'
                : 'bg-light-blue p-2 rounded hover:bg-main-color hover:text-white duration-500'
            }
          >
            <li>vidéos</li>
          </NavLink>
          <NavLink
            to="/mediatheque/musique"
            className={({ isActive }) =>
              isActive
                ? 'p-2 rounded bg-main-color text-white'
                : 'bg-light-blue p-2 rounded hover:bg-main-color hover:text-white duration-500'
            }
          >
            <li>musiques</li>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </section>
  )
}
