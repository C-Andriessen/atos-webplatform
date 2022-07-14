import { useContext } from "react";
import { userContext } from "../../context/userContext";

export default function DashboardAvatarSettingsMobile(props) {
  const { user } = useContext(userContext);

  if (props.img === "") {
    var username = user.name;
    username = username.split(" ");

    const firstInitial = username[0].slice(0, 1).toLocaleUpperCase();
    const lastInitial = username[username.length - 1]
      .slice(0, 1)
      .toLocaleUpperCase();
    return (
      <span className="inline-flex items-center justify-center h-full w-full rounded-full bg-gray-500">
        <span className="font-medium leading-none text-white">
          {firstInitial + lastInitial}
        </span>
      </span>
    );
  } else {
    return (
      <img
        className="rounded-full h-full w-full object-cover"
        src={props.img}
        alt=""
      />
    );
  }
}
