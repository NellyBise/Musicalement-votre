export default function Videos() {
  return (
    <article className="flex justify-center mx-auto">
      <div className="flex justify-center">
        <iframe
          className="w-full h-96 md:w-[800px] md:h-[450px]"
          src="https://www.youtube.com/embed/zxrr9appK7M?si=j7DdQ6fVesqMd5TB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </article>
  )
}
