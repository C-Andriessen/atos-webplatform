import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { hostContext } from "../../context/hostContext";
import { userContext } from "../../context/userContext";
import DashboardAvatarSettings from "./DashboardAvatarSettings";
import DashboardAvatarSettingsMobile from "./DashboardAvatarSettingsMobile";

export default function DashboardSettings() {
  const { user, imgurl } = useContext(userContext);
  const host = useContext(hostContext);
  const [imgSrc, setImgSrc] = useState("undefined");
  const [name, setName] = useState(user.name);
  const [workTitle, setWorkTitle] = useState(user.work);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const [description, setDescription] = useState(user.description);
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("name", name);
    formData.append("work", workTitle);
    formData.append("phone", phoneNumber);
    formData.append("description", description);

    axios
      .post(`${host}/api/user/update`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      .then((res) => {});
  }
  useEffect(() => {
    if (imgurl.length != 0) {
      setImgSrc(imgurl);
    }
  }, [imgurl]);
  return (
    <div>
      <div className="max-w-screen-xl pb-6 lg:pb-16">
        <div className="bg-darkmode rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-20 lg:divide-y-0 lg:divide-x">
            <form
              className="divide-y divide-gray-200 lg:col-span-9"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              {/* Profile section */}
              <div className="py-6 px-4 sm:p-6 lg:pb-8">
                <div>
                  <p className="mt-1 text-sm text-light">
                    Dit is uw publieke informatie, dus let goed op want iedereen
                    kan dit zien!
                  </p>
                </div>

                <div className="mt-6 flex flex-col lg:flex-row">
                  <div className="flex-grow space-y-6">
                    <div>
                      <label
                        htmlFor="about"
                        className="block text-sm font-medium text-light"
                      >
                        Over mij
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={5}
                          className="shadow-sm focus:ring-primary focus:border-primary mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          value={description}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                        />
                      </div>
                      <p className="mt-2 text-sm text-light">
                        Een kleine beschrijving over wie je bent
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                    <p
                      className="text-sm font-medium text-light"
                      aria-hidden="true"
                    >
                      Profielfoto
                    </p>
                    <div className="mt-1 lg:hidden">
                      <div className="flex items-center">
                        <div
                          className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12"
                          aria-hidden="true"
                        >
                          <DashboardAvatarSettingsMobile
                            img={imgSrc ? imgSrc : imgurl}
                          />
                        </div>
                        <div className="ml-5 rounded-md shadow-sm">
                          <div className="group relative border border-gray rounded-md py-2 px-3 flex items-center justify-center hover:bg-primary focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                            <label
                              htmlFor="mobile-user-photo"
                              className="relative text-sm leading-4 font-medium text-gray-50 pointer-events-none"
                            >
                              <span>Aanpassen</span>
                              <span className="sr-only"> user photo</span>
                            </label>
                            <input
                              id="mobilephoto"
                              name="user-photo"
                              type="file"
                              className="absolute w-full h-full opacity-0 cursor-pointer border-gray rounded-md"
                              onChange={(e) => {
                                const [file] = e.target.files;
                                if (file) {
                                  setImgSrc(URL.createObjectURL(file));
                                }
                                setImage(file);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden relative rounded-full overflow-hidden lg:block">
                      <DashboardAvatarSettings img={imgSrc ? imgSrc : imgurl} />
                      <label
                        htmlFor="desktop-user-photo"
                        className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                      >
                        <span>Aanpassen</span>
                        <span className="sr-only"> user photo</span>
                        <input
                          type="file"
                          id="desktop-user-photo"
                          name="user-photo"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md"
                          onChange={(e) => {
                            const [file] = e.target.files;
                            if (file) {
                              setImgSrc(URL.createObjectURL(file));
                            }
                            setImage(file);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-12 gap-6">
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-light"
                    >
                      Volledige naam
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={name}
                      autoComplete="given-name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="url"
                      className="block text-sm font-medium text-light"
                    >
                      Werk titel
                    </label>
                    <input
                      type="text"
                      name="url"
                      id="url"
                      value={workTitle}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      onChange={(e) => {
                        setWorkTitle(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-light"
                    >
                      Telefoon nummer
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      value={phoneNumber}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-6 bg">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-light"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      value={user.email}
                      className="mt-1 block w-full text-primary font-bold border border-gray-300 rounded-md shadow-md sm:text-sm"
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>

              {/* Privacy section */}
              <div className="pt-6 divide-y divide-gray-200">
                <div className="mt-4 py-4 px-4 flex justify-end sm:px-6">
                  <button
                    type="button"
                    className="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="ml-5 bg-sky-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
