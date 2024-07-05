import { AudioPlayer } from 'react-audio-play'
import { useState } from 'react'
import photo from '../../public/galerie/04.jpg'

const playList = [
  {
    name: 'Medley',
    src: '/musique/Medley.mp3',
    id: 0,
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
    name: 'Retiens la nuit',
    src: '/musique/Retiens la nuit.mp3',
    id: 3,
  },
]

export default function Music() {
  const [Track, setTrack] = useState(playList[0])
  const toggleTrack = (id) => {
    const selectedTrack = playList.find((track) => track.id === id)
    setTrack(selectedTrack)
  }

  return (
    <article className="flex w-full my-12">
      <div className="w-1/3 mx-4">
        <img src={photo} alt="Fabrice sur scène" className="rounded-md" />
      </div>
      <div className="w-2/3">
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
