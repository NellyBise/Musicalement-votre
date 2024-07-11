import notes from '../assets/musical-notes.svg'

export default function Presentation() {
  return (
    <section className="flex flex-col items-center mt-24 max-w-[1440px] px-8">
      <h2 className="text-4xl text-center text-main-color font-bold uppercase my-12 flex gap-2">
        <img src={notes} alt="" className="h-8" />
        Présentation
      </h2>

      <iframe
        className="w-full h-96 md:w-[800px] md:h-[450px]"
        src="https://www.youtube.com/embed/PV6exZDmH9U?si=jg5cPhRuZnnmXITD"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <h2 className="flex gap-2 text-4xl text-main-color font-bold uppercase my-12">
        <img src={notes} alt="" className="h-8" />
        MON PARCOURS
      </h2>
      <div className="flex flex-col text-main-color my-7 gap-4 max-w-[1440px]">
        <p className="">
          Mon parcours musical a commencé à l&rsquo;âge de 7 ans lorsque
          j&rsquo;ai pris mes premières leçons de guitare. Pendant huit ans,
          j&rsquo;ai perfectionné mes compétences au conservatoire de Toulouges
          avant de suivre des cours particuliers avec Grégoire Sanchez, qui
          m&rsquo;a enseigné toutes les bases de la guitare électrique.
        </p>
        <p>
          Fort de cet apprentissage, j&rsquo;ai fait mes débuts dans
          l&rsquo;orchestre &quot;Zénith&quot;, où j&rsquo;ai appris toutes les
          ficelles du métier de musicien de bal. Après huit années
          enrichissantes au sein de cet orchestre, j&rsquo;ai eu
          l&rsquo;opportunité de devenir intermittent du spectacle et j&rsquo;ai
          rejoint l&rsquo;orchestre COMBO GILI. Ce fut un court passage, mais
          extrêmement propice à de nombreuses rencontres, notamment avec René
          Coll, qui m&rsquo;a invité à me produire avec lui.
        </p>
        <p>
          Ensuite, j&rsquo;ai vécu l&rsquo;aventure de l&rsquo;orchestre 4ème
          AVENUE pendant cinq ans, suivie de cinq autres années avec
          l&rsquo;orchestre CASENOVES. Chaque expérience m&rsquo;a permis de
          grandir en tant que musicien et de rencontrer des artistes talentueux.
        </p>
        <p>
          Aujourd&rsquo;hui, je continue de partager ma passion en jouant dans
          divers groupes. J&rsquo;ai eu la chance de collaborer avec des
          musiciens extraordinaires et de participer à des projets variés qui
          ont enrichi mon parcours artistique. Mon objectif est de toujours
          offrir des performances mémorables et de créer une connexion
          authentique avec le public.
        </p>
      </div>
    </section>
  )
}
