import photos from '../assets/data/photos.json'

export default function Photos() {
  return (
    <article className="flex justify-center">
      <div className="grid-cols-3 grid gap-4">
        {photos.map((photo) => (
          <img
            src={photo.src}
            alt={photo.name}
            key={photo.src}
            className="w-80 h-96 object-cover"
          />
        ))}
      </div>
    </article>
  )
}
