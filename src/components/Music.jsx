import { AudioPlayer } from 'react-audio-play'
import { useState } from 'react'

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
    <article className="flex flex-col items-center w-full my-12">
      <div className="flex items-center justify-between text-white bg-main-color w-1/3">
        <h2 className="p-2">{Track.name}</h2>
        <AudioPlayer
          src={Track.src}
          autoPlay="true"
          volume={50}
          volumePlacement="top"
          color="#cfcfcf"
          sliderColor="#94b9ff"
          backgroundColor="#072550"
          className="rounded-none w-full"
        />
      </div>
      <ul className="w-1/3 border-main-color border-2">
        {playList.map((track) => (
          <li
            key={track.id}
            onClick={() => toggleTrack(track.id)}
            className={`text-main-color p-2 hover:bg-light-color cursor-pointer ${
              track.id === Track.id ? 'bg-light-color' : ''
            }`}
          >
            {track.name}
          </li>
        ))}
      </ul>
    </article>
  )
}
