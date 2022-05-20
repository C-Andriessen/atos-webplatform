/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

const faqs = [
  {
    question: "Is de service echt gratis?",
    answer:
      "Ja! het enige waar u voor moet betalen zijn de materiaalkosten en eventuele reiskosten.",
  },
  {
    question: "Is de kwaliteit dan niet slecht?",
    answer:
      "Omdat de studenten worden begeleid door docenten kan het bijna niet voorkomen dat het vakwerk slecht word uitgevoerd.",
  },
  {
    question: "Hoe meld ik mij aan als school?",
    answer:
      "U kunt uw school aanmelden bij ons via het contact formulier hier onder. Dan komt er een kennismakingsgesprek en gaan wij bekijken wat wij voor elkaar kunnen betekenen",
  },
  // More questions...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Faq() {
  return (
    <div className="bg-darkmode">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-light sm:text-4xl">
            Veelgestelde vragen
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-light">
                        <span className="font-medium text-light">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-6 w-6 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-light">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
