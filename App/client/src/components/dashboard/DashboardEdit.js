import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hostContext } from "../../context/hostContext";
import ErrorMessage from "../ErrorMessage";

export default function DashboardEdit() {
  const { id } = useParams();
  const host = useContext(hostContext);
  const [image, setImage] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${host}/api/post/get/${id}`, { withCredentials: true })
      .then((res) => {
        setImageSrc(`${host}/api/post/image/${res.data.image}`);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setContent(res.data.content);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", content);
    formData.append("id", id);
    axios
      .post(`${host}/api/post/update`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.errorMessage) {
          setError(res.data.errorMessage);
        } else {
          window.location.href = "/dashboard";
        }
      });
  }

  return (
    <div>
      <div>
        {error ? <ErrorMessage message={error} /> : ""}
        <div className="md:grid md:grid-cols-1 md:gap-6 mt-5">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className=" sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-white"
                      >
                        Titel
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          value={title}
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full  rounded-md sm:text-sm border-gray-300"
                          placeholder="Geef de titel van de oproep op"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-white"
                    >
                      Korte beschrijving
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Kleine beschrijving die in de preview zichtbaar is"
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="content"
                      className="block text-sm font-medium text-white"
                    >
                      Volledige beschrijving
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="content"
                        name="content"
                        rows={3}
                        value={content}
                        onChange={(e) => {
                          setContent(e.target.value);
                        }}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Dit is de tekst die zichtbaar is op de pagina van de oproep"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white">
                      Foto van de opdracht
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-white"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600 items-center place-content-center">
                          <label
                            htmlFor="file"
                            className="relative cursor-pointer  rounded-md font-bold text-primary hover:text-purple-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 flex flex-col"
                          >
                            <span>Upload je bestand</span>
                            {imageSrc && (
                              <img
                                src={imageSrc}
                                className="object-contain my-4"
                              />
                            )}
                            <input
                              id="file"
                              name="file"
                              type="file"
                              className="sr-only"
                              onChange={(e) => {
                                const [file] = e.target.files;
                                if (file) {
                                  setImageSrc(URL.createObjectURL(file));
                                }
                                setImage(file);
                              }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Oproep aanpassen
                  </button>
                  <button
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-700 hover:bg-rose-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-5"
                    onClick={(e) => {
                      e.preventDefault();
                      axios
                        .post(
                          `${host}/api/post/delete`,
                          { id },
                          {
                            withCredentials: true,
                          }
                        )
                        .then(() => {
                          window.location.href = "/dashboard";
                        });
                    }}
                  >
                    Verwijder oproep
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
