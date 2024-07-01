import { useEffect, useState } from 'react'
import axios from 'axios'

export default function PhotosFB() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          'https://graph.facebook.com/v20.0/122190877538070082/photos',
          {
            params: {
              access_token:
                'EAAGOoC0VZB1gBO5UZC3afOcv5AVapnXlCzs2zZCbqqrm6wV9BLlXXPJoeYwnX0RfhE7Y4dZARgobLuJFKwOZCjnTHNqPdt2wEpjJWjTY8HO6ZAZBMhBj7bNywAeGZBHtTq5ioxMBGzKNkxKZC1lVMkn29M57csbguZAEncfAxrGmZAu3ILn6Ut6WNKQRB8hNDuK0xSRwCHvvrDswowJLFRbiwDN117tDQZDZD',
              fields: 'id,images',
            },
          }
        )
        setPhotos(response.data.data)
      } catch (error) {
        console.error('Error fetching photos:', error)
      }
    }

    fetchPhotos()
  }, [])

  return (
    <article className="flex flex-col items-center">
      <h2>Galerie photos </h2>
      <div className="grid-cols-3 grid gap-4">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.images[0].source}
            alt={`photo-${photo.id}`}
            style={{ width: '100%', height: 'auto' }}
          />
        ))}
      </div>
    </article>
  )
}
