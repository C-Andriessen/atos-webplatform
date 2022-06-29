import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AvatarProjects from "../components/AvatarProjects";
import DashoardAvatar from "../components/dashboard/DashboardAvatar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";
import { hostContext } from "../context/hostContext";

export default function Projects() {
  const host = useContext(hostContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${host}/api/post/getAll`).then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <>
      <Header />
      <div className="relative bg-darkmode pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-darkmode h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-primary sm:text-4xl">
              Bekijk hier de opdrachten
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-light sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post, i) => (
              <div
                key={i}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={`${host}/api/post/image/${post.image}`}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <a href={`/opdracht/${post._id}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.description}
                      </p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <AvatarProjects
                        profileImg={post.user.profileImg}
                        name={post.user.name}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        {post.user.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
