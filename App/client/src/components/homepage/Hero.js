import LogoCloud from "../LogoCloud";

export default function Hero() {
  return (
    <div className="bg-darkmode">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-darkmode" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="./images/main.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Maak een klus</span>
                    <span className="block text-primary">niet te duur</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-light sm:max-w-3xl">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-primary hover:text-white sm:px-8"
                      >
                        Zoek een opdracht
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Plaats een opdracht
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <LogoCloud />
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
