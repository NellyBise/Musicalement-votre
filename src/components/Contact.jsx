import notes from '../assets/musical-score.svg'

export default function Contact() {
  return (
    <article
      className="w-full my-12 md:mt-24 md:bg-[url('/music2.png')] bg-no-repeat bg-contain bg-center"
      id="contact"
    >
      <div className="w-full bg-light-color/85 flex flex-col items-center">
        <h2 className="flex gap-2 text-4xl w-full justify-center p-4 text-main-color font-bold">
          <img src={notes} alt="" className="h-12 pb-2" />
          CONTACTEZ-MOI
        </h2>
        <p className="text-sm lg:text-lg text-secondary-color my-7 leading-8 font-semibold">
          Vous pouvez m&rsquo;appeler au 06 13 06 05 09, m&rsquo;envoyer un mail
          à{' '}
          <a
            className="text-main-color underline pointer-events-auto hover:bg-main-color hover:text-white duration-500"
            href="mailto:​musicalementvotre66@gmail.com"
            aria-label="cliquer pour envoyer un email"
          >
            ​musicalementvotre66@gmail.com
          </a>{' '}
          ou utiliser le formulaire
        </p>
        <form className="md:w-1/2 max-w-[700px] flex flex-col w-full px-6 text-main-color font-semibold">
          <label htmlFor="name">
            <span className="bg-light-color/85 ">Votre nom</span>
          </label>
          <input
            className="p-2 drop-shadow-lg bg-white/95 rounded"
            id="name"
            required
            autoComplete="name"
            maxLength={80}
            name="name"
            type="text"
          ></input>
          <label className="mt-8" htmlFor="email">
            <span className="bg-light-color/85 ">Votre adresse email</span>
          </label>
          <input
            className="p-2 drop-shadow-lg bg-white/95 rounded"
            id="email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            type="email"
          ></input>
          <label className="mt-8" htmlFor="message">
            <span className="bg-light-color/85 ">Votre message</span>
          </label>
          <textarea
            className="h-36 p-2 drop-shadow-lg bg-white/95 rounded"
            id="message"
            required
            name="message"
          ></textarea>
          <button className="mt-8 text-center self-end w-max pointer-events-auto rounded bg-light-blue px-3 py-1 text-s md:text-lg  drop-shadow-lg hover:bg-main-color hover:text-white duration-500 disabled:bg-light-color disabled:cursor-not-allowed">
            Envoyer
          </button>
        </form>
      </div>
    </article>
  )
}
