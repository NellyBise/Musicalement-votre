import sound from '../assets/sound.png'
import light from '../assets/lumiere.png'
import ecran from '../assets/materiel.png'
import Card from '../components/Card'

export default function Material() {
  return (
    <section className="mt-24 max-w-[1440px] px-8">
      <h2 className="flex justify-center text-4xl text-center text-main-color font-bold uppercase my-12">
        Un équipement professionnel
      </h2>
      <p className="text-main-color">
        Musicalement Vôtre dispose d&rsquo;un équipement professionnel de
        pointe, intégrant les dernières avancées technologiques. Pour chaque
        événement, j&rsquo;adapte la configuration du matériel afin de garantir
        une qualité sonore et visuelle optimale.
      </p>
      <div className="flex flex-col md:flex-row h-full gap-4 text-main-color text-l my-12">
        <Card
          image={sound}
          text={
            <div className="h-80">
              <h3 className="text-xl text-center font-semibold uppercase m-4">
                Son
              </h3>
              <ul className="list-disc list-inside p-4">
                <li>HK Elements 3,2 Kwatts modulable</li>
                <li>Micro HF Shure</li>
                <li>Table de mixage Behringer</li>
                <li>Pc portable</li>
                <li>Contrôleur DJ platine</li>
                <li>Enceinte retour</li>
                <li>2 micros HF AKG (karaoké)</li>
                <li>2 micros HF Power (karaoké)</li>
                <li>2 micros filaires Shure</li>
              </ul>
            </div>
          }
        />
        <Card
          image={light}
          text={
            <div className="h-80">
              <h3 className="text-xl text-center uppercase font-semibold m-4">
                Lumières
              </h3>
              <ul className="list-disc list-inside p-4">
                <li>8 pars slims 5x10W</li>
                <li>2 effets strob</li>
                <li>4 barres led</li>
                <li>2 barres led 4play</li>
                <li>1 machine à fumée</li>
                <li>1 console Contrôleur DMX</li>
                <li>4 pars 5x10 watts</li>
              </ul>
            </div>
          }
        />
        <Card
          image={ecran}
          text={
            <div className="h-80">
              <h3 className="text-xl text-center uppercase font-semibold m-4">
                Autres
              </h3>
              <ul className="list-disc list-inside p-4">
                <li>Pont 2 points 1M50</li>
                <li>Table support DJ</li>
                <li>Écran géant (karaoké)</li>
                <li>Écran de contrôle (karaoké)</li>
              </ul>
            </div>
          }
        />
      </div>
    </section>
  )
}
