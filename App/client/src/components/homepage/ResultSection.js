function ResultSection() {
  return (
    <>
      <div className="flex px-14 mt-60">
        <div className="text-light w-1/2">
          <div className="space-y-7">
            <h4 className="text-2xl">Resultaten</h4>
            <h2 className="text-4xl font-bold tracking-wide">
              Klussen door <span className="text-primary">studenten</span>
            </h2>
            <p className="text-2xl w-10/12">
              Hier komen foto's met een kleine beschrijving zodat klanten een
              beeld hebben bij wat er geleverd kan worden.
            </p>
          </div>
          <div className="mt-24">
            <a
              href="http://localhost:3000"
              className=" text-xl bg-primary py-2 px-10 font-bold rounded-lg"
            >
              Bekijk meer
            </a>
          </div>
        </div>
        <img
          alt="main foto"
          src="./images/pexels-valeria-boltneva-827518.jpg"
          className="w-1/2 h-96 object-cover object-center rounded-xl"
        />
      </div>
      <div className="flex px-14 justify-between my-8 ">
        <img
          alt="secondary foto"
          src="./images/1.jpg"
          className="w-[32%] rounded-xl"
        />
        <img
          alt="third foto"
          src="./images/2.jpg"
          className="w-[32%] rounded-xl"
        />
        <img
          alt="fourth foto"
          src="./images/3.jpg"
          className="w-[32%] rounded-xl"
        />
      </div>
    </>
  );
}

export default ResultSection;
