/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { userContext } from "../context/userContext";
import SignButtonsHeader from "./SignButtonsHeader";
import SignButtonsMobile from "./SignButtonsMobile";
import DashboardButtonHeader from "./DashboardButtonHeader";
import AvatarHeader from "./AvatarHeader";

const navigation = [
  { name: "Opdrachten", href: "/opdrachten" },
  { name: "Studenten", href: "/studenten" },
  { name: "Scholen", href: "/scholen" },
  { name: "Over ons", href: "#" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const user = useContext(userContext);
  return (
    <header>
      <Popover className="relative bg-darkmode">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <h1 className="text-white text-2xl font-bold">
                Student<span className="text-primary">IN</span>Werk
              </h1>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-darkmode rounded-md p-2 inline-flex items-center justify-center text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"></div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-light hover:text-light"
              >
                {item.name}
              </a>
            ))}
          </Popover.Group>
          {user.name ? <AvatarHeader /> : <SignButtonsHeader />}
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-darkmode divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-white text-2xl font-bold">
                      Student<span className="text-primary">IN</span>Werk
                    </h1>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-darkmode rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-light hover:text-gray-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {user.name ? <DashboardButtonHeader /> : <SignButtonsMobile />}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>
  );
}
