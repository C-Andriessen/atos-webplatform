/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  AdjustmentsIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  ClipboardIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import DashboardHome from "../components/dashboard/DashboardHome";
import DashboardSettings from "../components/dashboard/DashboardSettings";
import { userContext } from "../context/userContext";
import Signin from "./SignIn";
import DashoardAvatar from "../components/dashboard/DashboardAvatar";
import { ReactComponent as StuDienstLogo } from "../images/Logo_StuDienst.svg";
import DashboardOproep from "../components/dashboard/DashboardOproep";
import DashboardEdit from "../components/dashboard/DashboardEdit";

var navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
  {
    name: "Instellingen",
    icon: AdjustmentsIcon,
    href: "/dashboard/instellingen",
  },
  {
    name: "Oproep plaatsen",
    icon: ClipboardIcon,
    href: "/dashboard/oproep",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard(props) {
  const { user } = useContext(userContext);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dashboard, setDashboard] = useState(<DashboardHome />);

  const [selected, setSelected] = useState(props.page);

  useEffect(() => {
    switch (selected) {
      case "Dashboard":
        setDashboard(<DashboardHome />);
        break;
      case "Berichten":
        setDashboard("");
        break;
      case "Instellingen":
        setDashboard(<DashboardSettings />);
        break;
      case "Oproep plaatsen":
        setDashboard(<DashboardOproep />);
        break;
      case "Edit":
        setDashboard(<DashboardEdit />);
        break;

      default:
        break;
    }
  }, [selected]);

  if (user.name) {
    return (
      <>
        <div>
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 md:hidden"
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>

              <div className="fixed inset-0 flex z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-300"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                          type="button"
                          className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="sr-only">Close sidebar</span>
                          <XIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                      <div className="flex-shrink-0 flex items-center px-4">
                        <Link to="/" className="text-white font-bold text-2xl">
                          <StuDienstLogo className="w-full" />
                        </Link>
                      </div>
                      <nav className="mt-5 px-2 space-y-1">
                        {navigation.map((item) => (
                          <Link
                            onClick={() => {
                              setSelected(item.name);
                            }}
                            to={item.href}
                            key={item.name}
                            className={classNames(
                              selected === item.name
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "group flex items-center px-2 py-2 text-base font-medium rounded-md w-full"
                            )}
                          >
                            <item.icon
                              className={classNames(
                                selected === item.name
                                  ? "text-gray-300"
                                  : "text-gray-400 group-hover:text-gray-300",
                                "mr-4 flex-shrink-0 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Link>
                        ))}
                      </nav>
                    </div>
                    <div className="flex-shrink-0 flex bg-gray-700 p-4">
                      <div className="flex-shrink-0 group block">
                        <div className="flex items-center">
                          <div>
                            <DashoardAvatar />
                          </div>
                          <div className="ml-3">
                            <p className="text-base font-medium text-white">
                              {user.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
                <div className="flex-shrink-0 w-14">
                  {/* Force sidebar to shrink to fit close icon */}
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          {/* Static sidebar for desktop */}
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <Link to="/" className="text-white font-bold text-2xl">
                    <StuDienstLogo className="w-full" />
                  </Link>
                </div>
                <nav className="mt-5 flex-1 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      onClick={() => {
                        setSelected(item.name);
                      }}
                      to={item.href}
                      key={item.name}
                      className={classNames(
                        selected === item.name
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          selected === item.name
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-gray-300",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex bg-gray-700 p-4">
                <div className="flex-shrink-0 w-full group block">
                  <div className="flex items-center">
                    <div>
                      <DashoardAvatar />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pl-64 flex flex-col flex-1">
            <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
              <button
                type="button"
                className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <main className="flex-1">
              <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h1 className="text-2xl font-semibold text-white">
                    {selected}
                  </h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  {/* Replace with your content */}
                  {dashboard}
                  {/* /End replace */}
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  } else {
    return <Signin />;
  }
}
