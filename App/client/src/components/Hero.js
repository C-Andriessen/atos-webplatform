import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
  return (
    <>
      <div className="text-white px-14 relative z-10 mt-32">
        <h1 className="text-5xl w-5/12 font-bold">
          Zoek een <span className="text-primary">student</span> die past bij uw
          <span className="text-primary"> klus</span>
        </h1>
        <p className="w-[38%] text-light text-2xl my-6">
          Vul hier de locatie in waar u bent en wat de klus inhoud waar u hulp
          bij nodig heeft
        </p>
        <form className="bg-white text-text flex w-fit rounded-2xl py-2 px-12 divide-x items-center">
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
              placeholder="Stucadoor"
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
      <div className="bg-[url('./images/main.jpg')] bg-cover bg-right h-[66%] bg-no-repeat absolute top-32 w-[55%] right-0 rounded-l-xl"></div>
    </>
  );
}

export default Hero;
