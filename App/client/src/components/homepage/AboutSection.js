/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon } from "@heroicons/react/outline";

export default function Example() {
  return (
    <div className="relative bg-darkmode_secondary mt-40">
      <div className="h-56 bg-primary sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="Support team"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
              <UsersIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-light sm:text-4xl">
            Wij leveren wat u nodig heeft!
          </h2>
          <p className="mt-6 text-lg text-light">
            Vanuit dit platform kom je in contact met verschillende studenten
            die klaar zijn om een klus voor u te gaan doen! Doordat dit gedaan
            word onder begeleiding van een docent kunt u bijna de zelfde
            kwaliteit verwachten als dat van een professional
          </p>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-light">
                  Scholen
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-primary sm:text-3xl">
                  5
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-light">
                  Studenten
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-primary sm:text-3xl">
                  500
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-light">
                  Tevreden klanten
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-primary sm:text-3xl">
                  100+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
