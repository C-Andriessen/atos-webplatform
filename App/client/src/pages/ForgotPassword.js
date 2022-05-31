import axios from "axios";
import { useContext, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessMessage from "../components/SuccessMessage";
import { hostContext } from "../context/hostContext";
import { userContext } from "../context/userContext";

export default function ForgotPassword() {
  const { user } = useContext(userContext);
  const host = useContext(hostContext);
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios.post(`${host}/api/user/forgotpassword`, { email }).then((res) => {
      if (res.data.errorMessage) setError(res.data.errorMessage);
      else {
        setError("");
        setSuccess("U hebt een email ontvangen als die ingeschreven is");
      }
    });
  };

  if (user.name) {
    window.location.href = "/";
  }

  return (
    <>
      <Header />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-light">
            Herstel wachtwoord
          </h2>
          <p className="mt-2 text-center text-sm text-light">
            Of{" "}
            <a
              href="/login"
              className="font-medium text-primary hover:text-purple-400"
            >
              Login
            </a>
          </p>
          {error ? <ErrorMessage message={error} /> : ""}
          {success ? <SuccessMessage message={success} /> : ""}
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
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Verstuur email
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
