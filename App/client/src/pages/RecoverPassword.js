import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SuccessMessage from "../components/SuccessMessage";
import { hostContext } from "../context/hostContext";
import { userContext } from "../context/userContext";
import NotFound from "./NotFound";

export default function RecoverPassword() {
  const { user } = useContext(userContext);
  const host = useContext(hostContext);
  const [invalid, setInvalid] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  let params = new URL(document.location).searchParams;
  let token = params.get("token");

  useEffect(() => {
    axios.post(`${host}/api/email/recover/${token}`).then((res) => {
      if (res.data === "invalid") {
        setInvalid(true);
      }
      setUserId(res.data._id);
    });
  }, []);

  console.log(token);
  const handleSubmit = (ev) => {
    ev.preventDefault();
    axios
      .post(`${host}/api/user/recoverpassword`, {
        user: userId,
        password,
        passwordRepeat,
      })
      .then((res) => {
        if (res.data.errorMessage) setError(res.data.errorMessage);
        else {
          setError("");
          setSuccess(
            "Wacthwoord successvol aangepast u word automatisch doorgestuurd naar login"
          );
          setTimeout(() => {
            window.location.href = "/login";
          }, 5000);
        }
      });
  };

  if (user.name) {
    window.location.href = "/";
  }
  if (!invalid) {
    return (
      <>
        <Header />
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-light">
              Herstel wachtwoord
            </h2>
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
                    Wachtwoord
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
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
                    Herstel wachtwoord
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
  return <NotFound />;
}
