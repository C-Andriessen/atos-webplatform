import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ReactComponent as Beeldmerk } from "../images/Beeldmerk_StuDienst.svg";

/* This example requires Tailwind CSS v2.0+ */
export default function NotFound() {
  return (
    <>
      <Header />
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-darkmode">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <a href="/" className="inline-flex">
              <Beeldmerk />
            </a>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-light tracking-tight sm:text-5xl">
                pagina niet gevonden
              </h1>
              <p className="mt-2 text-base text-light">
                Sorry, we kunnen de pagina die u opvroeg niet vinden
              </p>
              <div className="mt-6">
                <a
                  href="/"
                  className="text-base font-medium text-primary hover:text-purple-400"
                >
                  Ga naar de hoofdpagina<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="text-sm font-medium text-light hover:text-primary"
            >
              Neem contact met ons op
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}
