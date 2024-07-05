export default function Footer() {
  return (
    <footer className="flex justify-center items-center gap-12 bg-main-color w-screen h-full p-4 text-2xl text-white">
      <div className="flex flex-col gap-4">
        <a
          href="mailto:​musicalementvotre66@gmail.com"
          className="flex items-center gap-2 hover:text-light-blue duration-500"
        >
          <i className="fa-solid fa-envelope"></i>
          <span className="text-xl"> ​musicalementvotre66@gmail.com</span>
        </a>
        <a
          href="tel:0613060509"
          className="flex items-center gap-2 hover:text-light-blue duration-500"
        >
          <i className="fa-solid fa-phone"></i>
          <span className="text-xl"> 06 13 06 05 09 </span>
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl pt-2">Retrouvez-moi sur les réseaux</p>
        <div className="flex gap-12 justify-center">
          <a href="https://www.facebook.com/FABROSCO" target="_blank">
            <i className="fa-brands fa-facebook hover:text-light-blue duration-500 text-3xl"></i>
          </a>
          <a href="https://www.youtube.com/@fabricebise937" target="_blank">
            <i className="fa-brands fa-youtube hover:text-light-blue duration-500 text-3xl"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
