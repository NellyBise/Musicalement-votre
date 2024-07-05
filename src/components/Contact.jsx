export default function Contact() {
  return (
    <article
      className="flex flex-col items-center w-1/2 py-12 md:py-24 bg-[url('/music3.png')] bg-no-repeat bg-contain bg-center"
      id="contact"
    >
      <h2 className="text-4xl w-full text-center p-4 text-main-color font-bold bg-light-color/80 ">
        CONTACTEZ-MOI
      </h2>
      <form className="pt-20 flex flex-col w-full px-6 text-main-color font-semibold bg-gradient-to-b from-light-color/80 via-transparent via-30%">
        <label htmlFor="name">Votre nom</label>
        <input
          className="p-2 drop-shadow-lg bg-white rounded"
          id="name"
          required
          autoComplete="name"
          maxLength={80}
          name="name"
          type="text"
        ></input>
        <label className="mt-8" htmlFor="email">
          Votre adresse email
        </label>
        <input
          className="p-2 drop-shadow-lg bg-white rounded"
          id="email"
          required
          autoComplete="email"
          maxLength={80}
          name="email"
          type="email"
        ></input>
        <label className="mt-8" htmlFor="message">
          Votre message
        </label>
        <textarea
          className="h-36 p-2 drop-shadow-lg bg-white rounded"
          id="message"
          required
          name="message"
        ></textarea>
        <button className="mt-8 text-center self-end w-max pointer-events-auto rounded bg-light-blue px-3 py-1 text-s md:text-lg  drop-shadow-lg hover:bg-main-color hover:text-white duration-500 disabled:bg-light-color disabled:cursor-not-allowed">
          Envoyer
        </button>
      </form>
    </article>
  )
}
