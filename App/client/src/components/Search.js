/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { SearchIcon, BriefcaseIcon } from "@heroicons/react/solid";

export default function Search() {
  return (
    <form className="mt-5">
      <label htmlFor="email" className="block text-sm font-medium text-light">
        Zoek naar een category of specifieke opdracht
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <BriefcaseIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="project"
            id="project"
            className="focus:ring-primary focus:border-primary block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Zoek</span>
        </button>
      </div>
    </form>
  );
}
