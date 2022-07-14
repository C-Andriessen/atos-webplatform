/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext } from "react";
import { Menu, Transition } from "@headlessui/react";
import { userContext } from "../context/userContext";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AvatarHeader() {
  const { user, imgurl } = useContext(userContext);

  if (user.profileImg === "") {
    var username = user.name;
    username = username.split(" ");

    const firstInitial = username[0].slice(0, 1).toLocaleUpperCase();
    const lastInitial = username[username.length - 1]
      .slice(0, 1)
      .toLocaleUpperCase();
    return (
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Menu as="div" className="relative inline-block text-left z-20">
          <div>
            <Menu.Button className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary z-10">
              <p className="text-lg font-medium leading-none text-white">
                {firstInitial + lastInitial}
              </p>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/dashboard"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Dashboard
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/logout"
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full text-left px-4 py-2 text-sm"
                      )}
                    >
                      Log uit
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
  } else {
    return (
      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <Menu
          as="div"
          className="relative inline-block text-left z-20 h-12 w-12"
        >
          <div>
            <Menu.Button className="inline-flex rounded-full z-10 ">
              <img
                src={imgurl}
                alt=""
                className="rounded-full h-12 w-12 object-cover"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to="/dashboard"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Dashboard
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/logout"
                      type="submit"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block w-full text-left px-4 py-2 text-sm"
                      )}
                    >
                      Log uit
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
  }
}
