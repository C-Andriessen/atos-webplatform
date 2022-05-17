import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
  return (
    <>
      <div className="text-white px-14 relative z-10 mt-32 flex flex-col h-[80%] items-center">
        <h1 className="text-5xl w-6/12 font-bold text-center">
          Zoek een <span className="text-primary">student</span> die past bij uw
          <span className="text-primary"> klus</span>
        </h1>
        <p className="w-5/12 text-light text-2xl my-8 text-center">
          Vul hier de locatie in waar u bent en wat de klus inhoud waar u hulp
          bij nodig heeft
        </p>
        <form className="bg-white text-text flex w-fit rounded-2xl py-3 px-12 divide-x items-center">
          <div className="flex flex-col pr-4">
            <label className="text-lg">Locatie</label>
            <input
              className="text-primary font-bold text-lg placeholder:text-primary placeholder:opacity-50"
              placeholder="Groningen"
            />
          </div>
          <div className="flex flex-col px-4">
            <label className="text-lg">Welke service</label>
            <input
              className="text-primary text-lg font-bold placeholder:text-primary placeholder:opacity-50"
              placeholder="Stukadoor"
            />
          </div>
          <div className="flex flex-col px-4">
            <label className="text-lg">Voorkeur school</label>
            <input
              className="text-primary text-lg font-bold placeholder:text-primary placeholder:opacity-50"
              placeholder="Noorderpoort"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white rounded-xl h-fit w-fit p-2"
          >
            <AiOutlineSearch className="font-bold w-7 h-7" />
          </button>
        </form>
      </div>
      <div className="bg-[url('./images/main.jpg')] bg-cover bg-right h-[80%] bg-no-repeat absolute top-0 w-full rounded-l-xl bg-[rgba(0,0,0,0.7)] bg-blend-overlay"></div>
    </>
  );
}

export default Hero;
