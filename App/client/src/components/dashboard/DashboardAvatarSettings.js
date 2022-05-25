import { useContext } from "react";
import { userContext } from "../../context/userContext";

export default function DashboardAvatarSettings(props) {
  const { user } = useContext(userContext);

  if (props.img === "") {
    var username = user.name;
    username = username.split(" ");

    const firstInitial = username[0].slice(0, 1).toLocaleUpperCase();
    const lastInitial = username[username.length - 1]
      .slice(0, 1)
      .toLocaleUpperCase();
    return (
      <span className="inline-flex items-center justify-center h-32 w-32 rounded-full bg-gray-500">
        <span className="font-medium leading-none text-white text-4xl">
          {firstInitial + lastInitial}
        </span>
      </span>
    );
  } else {
    return (
      <img className="relative rounded-full w-40 h-40" src={props.img} alt="" />
    );
  }
}
