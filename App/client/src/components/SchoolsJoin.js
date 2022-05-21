/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div className="bg-primary bg-opacity-30">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ook geinteresseerd?</span>
          <span className="block">Schrijf uw school direct in!</span>
        </h2>
        <a
          href="/contact"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
        >
          Neem contact met ons op
        </a>
      </div>
    </div>
  );
}
