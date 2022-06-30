import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { hostContext } from "../../context/hostContext";

export default function DashboardHome() {
  const host = useContext(hostContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${host}/api/post/getuserposts`, { withCredentials: true })
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Bekijk al je opdrachten
          </p>
          {posts.length > 0 && (
            <p className="mt-4 text-white">
              Druk op je opdracht om hem te kunnen bewerken
            </p>
          )}
        </div>

        {posts.length < 1 && (
          <div className="max-w-2xl py-10 ">
            {/* Details section */}
            <section aria-labelledby="details-heading">
              <h2
                id="details-heading"
                className="text-2xl font-medium tracking-tight text-white sm:text-2xl"
              >
                U heeft op dit moment nog geen oproepen geplaatst...
              </h2>
            </section>
          </div>
        )}

        {posts.length > 0 && (
          <div className="mt-8 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
            {posts.map((post, i) => (
              <a
                key={i}
                href={`/dashboard/edit/${post._id}`}
                className="flex flex-col-reverse"
              >
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-white">{post.description}</p>
                </div>
                <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={`${host}/api/post/image/${post.image}`}
                    className="object-center object-cover"
                  />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
