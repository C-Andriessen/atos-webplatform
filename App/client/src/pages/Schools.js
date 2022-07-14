import Footer from "../components/Footer";
import Header from "../components/Header";
import SchoolsJoin from "../components/SchoolsJoin";

const features = [
  {
    name: "Noorderpoort",
    description:
      "Noorderpoort is de plek waar vakmensen leren. Met mbo-opleidingen, cursussen en trainingen. Hier begint je beroep van morgen. En hier kom je terug, voor je werk van vandaag. Want goede vakmensen leren. Altijd.",
    imageSrc: "./images/noorderpoort-temp.jpeg",
    imageAlt: "Noorderpoort",
  },
  {
    name: "Alfa-college",
    description:
      "Het Alfa-college leidt jonge mensen en volwassenen op voor de samenleving van nu en straks. Dit doen wij niet alleen, maar in nauwe samenwerking met onze partners in de verschillende regio’s.",
    imageSrc: "./images/alfa-temp.jpeg",
    imageAlt: "Alfa college",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Schools() {
  return (
    <>
      <Header />
      <div className="bg-darkmode">
        <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-light sm:text-4xl">
              Alle scholen die bij ons zijn aangesloten
            </h2>
            <p className="mt-4 text-light">
              Hier ziet u een lijst met scholen die zich inmiddels al bij ons
              hebben aangesloten. Over elke school kan u lezen waar zij voor
              staan.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? "lg:col-start-1"
                      : "lg:col-start-8 xl:col-start-9",
                    "mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4"
                  )}
                >
                  <h3 className="text-lg font-bold text-primary">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-light">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0
                      ? "lg:col-start-6 xl:col-start-5"
                      : "lg:col-start-1",
                    "flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8"
                  )}
                >
                  <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SchoolsJoin />
      <Footer />
    </>
  );
}
