import DJ from '../assets/DJ2.png'
import Card from './Card'
import karaoke from '../assets/karaoke2.png'

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
]

export default function Animation() {
  return (
    <article className="flex gap-4 justify-center">
      <Card
        image={DJ}
        text={
          <div className="p-4 text-main-color h-96">
            <h2 className="uppercase text-2xl text-title-color text-center font-bold self-center mb-4">
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
          <div className="text-main-color p-4 flex flex-col justify-center h-96">
            <h2 className="uppercase text-2xl text-title-color font-bold self-center mb-4">
              Karaoké
            </h2>
            <p>Découvrez mes répertoires karaoké classés par langue :</p>
            <ul className="my-2">
              {playListKaraoke.map((list) => (
                <li
                  key={list.name}
                  className="text-main-color p-2 hover:text-title-color cursor-pointer"
                >
                  <a href={list.src}>
                    <i className="fa-regular fa-file-pdf mr-2"></i>
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-title-color bg-light-blue">
              ajouter les autres listes
            </p>
          </div>
        }
      />
    </article>
  )
}
