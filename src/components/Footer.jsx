import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-center bg-main-color h-full p-4 text-lg lg:text-xl text-white z-10 relative">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-12 ">
        <div className="flex flex-col gap-4">
          <a
            href="mailto:​musicalementvotre66@gmail.com"
            className="flex items-center gap-2 hover:text-light-blue duration-500"
          >
            <i className="fa-solid fa-envelope"></i>
            <span className="text-base lg:text-lg">
              {' '}
              ​musicalementvotre66@gmail.com
            </span>
          </a>
          <a
            href="tel:0613060509"
            className="flex items-center gap-2 hover:text-light-blue duration-500"
          >
            <i className="fa-solid fa-phone"></i>
            <span className="text-base lg:text-lg"> 06 13 06 05 09 </span>
          </a>
        </div>
        <div className="flex items-center md:flex-col gap-8 md:gap-2">
          <p className="text-base lg:text-lg">Retrouvez-moi sur les réseaux</p>
          <div className="flex gap-8 justify-center">
            <a href="https://www.facebook.com/FABROSCO" target="_blank">
              <i className="fa-brands fa-facebook hover:text-light-blue duration-500 text-3xl"></i>
            </a>
            <a href="https://www.youtube.com/@fabricebise937" target="_blank">
              <i className="fa-brands fa-youtube hover:text-light-blue duration-500 text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs lg:text-sm">
        Musicalement Votre <span className="text-base lg:text-lg">©</span>{' '}
        réalisé par <Link to="https://www.nelly-bise.fr/">Nelly Bise</Link>
      </p>
    </footer>
  )
}
