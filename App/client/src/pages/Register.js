import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ConfirmRegister from "../components/ConfirmRegister";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { hostContext } from "../context/hostContext";
import { userContext } from "../context/userContext";

export default function Register() {
  const { user } = useContext(userContext);

  const host = useContext(hostContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [sex, setSex] = useState("man");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {}, [success, error]);

  function handleRegister(ev) {
    ev.preventDefault();
    axios
      .post(`${host}/api/user/register`, {
        email,
        name,
        password,
        passwordRepeat,
        sex,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.errorMessage) {
          setError(res.data.errorMessage);
        } else {
          setError("");
          setEmail("");
          setName("");
          setPassword("");
          setPasswordRepeat("");
          setSex("");
          setSuccess(true);
        }
      });
  }

  if (user.name) {
    window.location.href = "/dashboard";
  }

  return (
    <>
      {success ? <ConfirmRegister /> : ""}
      <Header />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-light">
            Registratie
          </h2>
          <p className="mt-2 text-center text-sm text-light">
            Of heb je al een account?{" "}
            <a
              href="/login"
              className="font-medium text-primary hover:text-purple-400"
            >
              Log hier in
            </a>
          </p>
          {error ? <ErrorMessage message={error} /> : ""}
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleRegister}>
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
                    autoComplete="email"
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
                  htmlFor="fullname"
                  className="block text-sm font-medium text-gray-700"
                >
                  Volledige naam
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    value={name}
                    autoComplete="name"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="sex"
                  className="block text-sm font-medium text-gray-700"
                >
                  Geslacht
                </label>
                <select
                  id="sex"
                  name="sex"
                  value={sex}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  onChange={(e) => {
                    setSex(e.target.value.toLocaleLowerCase());
                  }}
                >
                  <option value="man">Man</option>
                  <option value="vrouw">Vrouw</option>
                  <option value="none">Zeg ik liever niet</option>
                </select>
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

              <div>
                <label
                  htmlFor="passwordRepeat"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wachtwoord herhalen
                </label>
                <div className="mt-1">
                  <input
                    id="passwordRepeat"
                    name="passwordRepeat"
                    type="password"
                    value={passwordRepeat}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                    onChange={(e) => {
                      setPasswordRepeat(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Registreer
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
