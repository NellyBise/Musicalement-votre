export default function Videos() {
  return (
    <article className="flex justify-center mx-auto">
      <div>
        <h2 className="text-title-color mb-12">
          Playlist YouTube : À CRÉER permet d'avoir toutes les videos dans un
          seul contenant, possibilité de playlists à thème et plusieurs
          contenants, au choix
        </h2>
        <div className="flex justify-center">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/zxrr9appK7M?si=j7DdQ6fVesqMd5TB"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </article>
  )
}
