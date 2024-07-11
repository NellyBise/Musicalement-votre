import DJ from '../assets/DJ3.png'
import Card from './Card'
import karaoke from '../assets/karaoke4.png'

const playListKaraoke = [
  {
    name: 'Répertoire français',
    src: '/karaoke/repertoire-francais.pdf',
    id: 0,
  },
  {
    name: 'Répertoire anglais',
    src: '/karaoke/repertoire-anglais.pdf',
    id: 1,
  },
  {
    name: 'Répertoire allemand',
    src: '/karaoke/repertoire-allemand.pdf',
    id: 2,
  },
  {
    name: 'Répertoire espagnol',
    src: '/karaoke/repertoire-espagnol.pdf',
    id: 3,
  },
  {
    name: 'Répertoire italien',
    src: '/karaoke/repertoire-italien.pdf',
    id: 4,
  },
  {
    name: 'Répertoire néerlandais',
    src: '/karaoke/repertoire-neerlandais.pdf',
    id: 5,
  },
]

export default function Animation() {
  return (
    <article className="flex flex-col md:flex-row gap-8 justify-center mb-12 max-w-[1440px] px-8">
      <Card
        image={DJ}
        text={
          <div className="p-4 text-main-color h-96">
            <h2 className="uppercase text-2xl text-center font-bold self-center mb-4">
              DJ Animation
            </h2>
            <h3 className="text-xl">Quelques références</h3>
            <p>
              Restaurants : la Taverne, Are y Sem, Hôtel Les Albères, Les
              Flamants Roses, Mas Houston ...
            </p>
            <p>
              Campings : La Roseraie, Le Trivoly, Cap Sud, Le Canigou, La Pinède
              enchantée...
            </p>
            <p>Mairies : Toulouges, Casteil, Saint Estève....</p>
            <h3 className="text-xl mt-4">Répertoire</h3>
            <p>
              Toujours en phase avec l&rsquo;actualité musicale, Fabrice
              interprète les grands succès du moment ainsi que les classiques
              intemporels qui traversent les générations.
            </p>
          </div>
        }
      />
      <Card
        image={karaoke}
        text={
          <div className="text-main-color  text-center p-4 flex flex-col h-96">
            <h2 className="uppercase text-2xl font-bold self-center mb-4">
              Karaoké
            </h2>
            <p>Découvrez mes répertoires karaoké classés par langue :</p>
            <ul className="my-2">
              {playListKaraoke.map((list) => (
                <li
                  key={list.name}
                  className="text-main-color p-1 hover:text-title-color cursor-pointer"
                >
                  <a href={list.src} target="_blank">
                    <i className="fa-regular fa-file-pdf mr-2"></i>
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </article>
  )
}
