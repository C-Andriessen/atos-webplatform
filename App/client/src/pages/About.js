import Footer from "../components/Footer";
import Header from "../components/Header";
import StuDienst from "../images/Logo_Slogan.svg";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
export default function About() {
  return (
    <>
      <Header />
      <div className="relative py-16 overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
                over het platform
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                StuDienst
              </span>
            </h1>
            <p className="mt-8 text-xl text-white leading-8">
              StudDienst is een platform voor studenten en iedereen die een
              vakman nodig heeft, maar dat misschien niet kan betalen.
            </p>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-white mx-auto">
            <p>
              Als u een klus gedaan moet hebben, maar er geen vakman voor wilt
              inhuren, dan kunt u hier terecht. Op dit platform helpen studenten
              u met uw klus, met als enige kosten de materiaalkosten en
              reiskosten. Hierdoor is het voor u veel goedkoper om een klus te
              laten doen.
            </p>
            <h2 className="text-primary">Waar zorgen we voor</h2>
            <ul role="lijst">
              <li>Goedkoop</li>
              <li>Snel</li>
              <li>Kwaliteit</li>
            </ul>
            <blockquote>
              <p className="text-primary">
                StuDienst biedt mogelijkheden voor studenten, en helpt
                alledaagse mensen die hulp nodig hebben met een klus
              </p>
            </blockquote>
            <figure>
              <img
                className="w-full rounded-lg"
                src={StuDienst}
                alt=""
                width={1310}
                height={873}
              />
            </figure>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
