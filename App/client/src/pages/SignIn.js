import axios from "axios";
import { useContext, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { hostContext } from "../context/hostContext";
import { userContext } from "../context/userContext";

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
export default function Signin() {
  const { user } = useContext(userContext);
  const host = useContext(hostContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post(
        `${host}/api/user/login`,
        { email, password, remember },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.errorMessage) {
          setError(res.data.errorMessage);
        } else {
          window.location.href = "/";
        }
      });
  };

  if (user.name) {
    window.location.href = "/dashboard";
  }

  return (
    <>
      <Header />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-light">
            Log in op je account
          </h2>
          <p className="mt-2 text-center text-sm text-light">
            Of{" "}
            <a
              href="/registreer"
              className="font-medium text-primary hover:text-purple-400"
            >
              Registreer hier
            </a>
          </p>
          {error ? <ErrorMessage message={error} /> : ""}
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    onChange={(e) => {
                      setEmail(e.target.value.toLocaleLowerCase());
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wachtwoord
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    autoComplete="current-password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={remember}
                    onChange={() => {
                      if (remember === false) {
                        setRemember(true);
                      } else {
                        setRemember(false);
                      }
                    }}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Onthoud mij
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-primary hover:text-purple-400"
                  >
                    Wachtwoord vergeten?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
