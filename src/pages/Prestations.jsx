import Animation from '../components/Animation'
import micro from '../assets/micro.png'
import guitar from '../assets/guitar.png'

export default function Prestations() {
  return (
    <section className="bg-[url('/music5.png')] bg-no-repeat bg-contain bg-top-left mt-20">
      <article className="flex h-screen w-screen bg-light-color/85">
        <div className="w-1/2 relative">
          <div className="absolute h-0 w-0 border-r-[40vw] border-b-[90vh] border-b-light-blue border-r-transparent"></div>
          <ul className="text-main-color text-2xl flex flex-col justify-around mt-4 h-4/5 w-full">
            <li className="z-10 bg-light-blue w-max py-4 px-5 transform translate-x-[1vw] translate-y-[0%]">
              BAL DISCO
            </li>
            <li className="z-10 bg-light-blue w-max py-4 px-5 transform translate-x-[5vw] -translate-x-1/2 translate-y-[5%]">
              CAMPING
            </li>
            <li className="z-10 bg-light-blue w-max py-4 px-5 transform translate-x-[11vw] -translate-x-1/2 translate-y-[10%]">
              MARIAGE
            </li>
            <li className="z-10 bg-light-blue w-max py-4 px-5 transform translate-x-[15vw] -translate-x-1/2 translate-y-[15%]">
              KARAOKÉ
            </li>
            <li className="z-10 bg-light-blue w-max py-4 px-5 transform translate-x-[21vw] -translate-x-1/2 translate-y-[20%]">
              ANNIVERSAIRE
            </li>
            <li className="z-10 bg-light-blue w-max py-4 px-5 transform translate-x-[25vw] -translate-x-1/2 translate-y-[25%]">
              COMITÉ D&rsquo;ENTREPRISE
            </li>
          </ul>
          <div className="relative">
            <img
              src={guitar}
              alt=""
              className="absolute -bottom-16  w-72 z-30"
            />
          </div>
        </div>
        <div className="relative mx-12 h-4/5 w-1/2 flex flex-col justify-center items-center text-center text-main-color text-2xl gap-2">
          <p className="">
            Vous cherchez une animation dynamique et personnalisée pour vos
            événements spéciaux ?
          </p>
          <p className="text-title-color font-arabella text-8xl font-bold mt-4 w-full">
            Musicalement Votre
          </p>
          <p className="mb-2">est là pour vous !</p>
          <img
            src={micro}
            alt=""
            className="absolute h-60 rotate-45 right-20 bottom-0"
          />
        </div>
      </article>
      <div className="flex flex-col text-main-color text-l font-semibold  mx-auto px-8 gap-4 mb-12 max-w-[1440px]">
        <p>
          DJ, chanteur et animateur, je vous propose mes services pour animer
          avec passion et professionnalisme divers événements tels que mariages,
          anniversaires, comités des fêtes et campings.
        </p>
        <p>
          Avec une playlist qui traverse les décennies, des années 80
          jusqu&rsquo;aux hits d&rsquo;aujourd&rsquo;hui en passant par des
          morceaux musette, je saurai parfaitement m&rsquo;adapter à vos goûts
          et à l&rsquo;ambiance que vous souhaitez créer.
        </p>
        <p>
          Faites de votre prochain événement un moment inoubliable avec
          Musicalement Votre !
        </p>
      </div>
      <Animation />
    </section>
  )
}
