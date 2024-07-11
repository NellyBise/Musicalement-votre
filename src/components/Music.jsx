import { AudioPlayer } from 'react-audio-play'
import { useState } from 'react'
import photo from '../assets/photo.jpg'

const playList = [
  {
    name: 'Medley',
    src: '/musique/Medley.mp3',
    id: 0,
  },
  {
    name: 'Andalouse',
    src: '/musique/andalouse.mp3',
    id: 4,
  },
  {
    name: 'Budapest',
    src: '/musique/Budapest.mp3',
    id: 5,
  },
  {
    name: 'Cheerleader',
    src: '/musique/cheerleader.mp3',
    id: 6,
  },
  {
    name: 'Englishman in New York',
    src: '/musique/Englishman.mp3',
    id: 7,
  },
  {
    name: "L'Estaca",
    src: '/musique/estaca.mp3',
    id: 8,
  },
  {
    name: 'Get Lucky',
    src: '/musique/Get Lucky.mp3',
    id: 1,
  },
  {
    name: 'Lady Lay',
    src: '/musique/Lady Lay.mp3',
    id: 2,
  },
  {
    name: 'Les bals populaires',
    src: '/musique/les bals populaires.mp3',
    id: 9,
  },
  {
    name: 'Le Petit Pain au chocolat',
    src: '/musique/pain chocolat.mp3',
    id: 10,
  },
  {
    name: 'Retiens la nuit',
    src: '/musique/Retiens la nuit.mp3',
    id: 3,
  },
  {
    name: 'Sweet Darling',
    src: '/musique/sweet darling.mp3',
    id: 11,
  },
  {
    name: 'The Chamber',
    src: '/musique/the chamber.mp3',
    id: 12,
  },
]

export default function Music() {
  const [Track, setTrack] = useState(playList[0])
  const toggleTrack = (id) => {
    const selectedTrack = playList.find((track) => track.id === id)
    setTrack(selectedTrack)
  }

  return (
    <article className="flex w-full max-w-[1440px] my-12">
      <div className="hidden md:flex w-1/3 mx-4">
        <img
          src={photo}
          alt="Fabrice sur scène"
          className="rounded-md object-cover"
        />
      </div>
      <div className="w-full md:w-2/3">
        <div className="flex items-center justify-between text-white bg-main-color mx-4 rounded-t-md overflow-hidden	">
          <h2 className="p-2">{Track.name}</h2>
          <AudioPlayer
            src={Track.src}
            autoPlay="true"
            volume={50}
            volumePlacement="top"
            color="#FFFFFF"
            sliderColor="#A8E2E3"
            backgroundColor="#072550"
            className="rounded-tr-md w-full"
          />
        </div>
        <ul className="border-main-color border-2 rounded-b-md overflow-hidden	 mx-4">
          {playList.map((track) => (
            <li
              key={track.id}
              onClick={() => toggleTrack(track.id)}
              className={`text-main-color p-2 hover:bg-light-blue cursor-pointer ${
                track.id === Track.id ? 'bg-light-blue' : 'bg-white'
              }`}
            >
              {track.name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
