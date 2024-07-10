import photo from '../assets/photo2.jpg'
import Contact from '../components/Contact'
import LinkCard from '../components/LinkCard'
import prestations from '../assets/prestations.jpg'
import materiel from '../assets/materiel.jpg'
import mediatheque from '../assets/mediatheque.jpg'
import notes from '../assets/musical-notes.svg'

export default function Home() {
  return (
    <section className="area flex flex-col items-center mt-24">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <article className="flex pb-20 h-screen bg-[url('/music.png')] bg-no-repeat bg-contain">
        <div className="w-3/5 h-3/5 flex flex-col my-auto items-center bg-gradient-to-r from-75% from-transparent to-light-color/80">
          <div className="h-full w-2/5 bg-light-blue relative">
            <img
              src={photo}
              alt="Fabrice sur scène"
              className="absolute -left-6 top-6 h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="w-3/5 px-4 gap-2 bg-gradient-to-r from-light-color/80 to-light-color/100 via-25% via-light-color/100 flex flex-col justify-center">
          <h2 className="text-8xl text-title-color font-arabella">
            Fabrice Bise
          </h2>
          <h3 className="text-4xl text-main-color font-bold">
            Musicien, chanteur et DJ
          </h3>
          <div className="text-main-color my-7 leading-8 font-semibold">
            <p>
              Guitariste et chanteur passionné avec une riche expérience
              scénique. J&rsquo;ai joué dans divers orchestres et groupes,
              partageant ma passion pour la musique à travers des performances
              mémorables. Aujourd&rsquo;hui, je continue à explorer de nouvelles
              collaborations et à créer des moments uniques avec le public.
            </p>
            <p>
              Envie d&rsquo;ajouter une touche musicale exceptionnelle à votre
              événement ou projet ? Contactez-moi et discutons de ce que nous
              pouvons créer ensemble !
            </p>
          </div>
          <a
            className="text-center w-max pointer-events-auto rounded bg-light-blue px-3 py-1 text-s md:text-lg  drop-shadow-lg hover:bg-main-color hover:text-white duration-500"
            href="mailto:musicalementvotre66@gmail.com"
            aria-label="cliquer pour envoyer un email"
          >
            Contactez-moi !
          </a>
        </div>
      </article>

      <article className="my-12">
        <h2 className="flex gap-2 justify-center text-4xl text-main-color font-bold uppercase mb-12">
          <img src={notes} alt="" className="h-8" />
          actualités
        </h2>
        <p className="text-title-color bg-light-blue">
          Afficher les dernières dates ou lien posts facebook ?
        </p>
      </article>

      <article className="my-12">
        <h2 className="flex gap-2 justify-center text-4xl text-main-color font-bold uppercase mb-12">
          <img src={notes} alt="" className="h-8" />
          En savoir plus
        </h2>
        <div className="flex gap-4">
          <LinkCard
            link="prestations"
            image={prestations}
            text="Un large éventail de prestations"
          />
          <LinkCard
            link="materiel"
            image={materiel}
            text="Un matériel professionnel de qualité"
          />
          <LinkCard
            link="mediatheque/photos"
            image={mediatheque}
            text="Retrouvez tous mes médias : photos, vidéos et musique"
          />
        </div>
      </article>
      <Contact />
    </section>
  )
}
