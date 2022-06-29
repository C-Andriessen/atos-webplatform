import { useContext } from "react";
import { hostContext } from "../context/hostContext";

export default function AvatarProjects(props) {
  const host = useContext(hostContext);
  if (props.profileImg === "") {
    var username = props.name;
    username = username.split(" ");

    const firstInitial = username[0].slice(0, 1).toLocaleUpperCase();
    const lastInitial = username[username.length - 1]
      .slice(0, 1)
      .toLocaleUpperCase();
    return (
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
        <span className="font-medium leading-none text-white">
          {firstInitial + lastInitial}
        </span>
      </span>
    );
  } else {
    return (
      <img
        className="inline-block h-10 w-10 rounded-full object-cover"
        src={`${host}/api/user/profileimg/${props.profileImg}`}
        alt=""
      />
    );
  }
}
