import { BiExit } from "react-icons/bi";

function Sidebar() {
  return (
    <div class="grid grid-cols-5 h-screen drop-shadow-xl sticky top-0">
      <div class="col-start-1 col-end-2">
        <div class="xl:rounded-r  xl:translate-x-0  flex justify-start items-start h-full sm:w-64 bg-zinc-800 flex-col p-5">
          <div class=" flex justify-between items-center">
            <div class="flex justify-center items-center  space-x-2">
              <div>
                <img
                  class="rounded-full"
                  src="https://i.ibb.co/L1LQtBm/Ellipse-1.png"
                  alt="avatar"
                />
              </div>
              <div class="flex justify-start flex-col items-start">
                <p class=" text-sm leading-5 text-white">Alexis Enache</p>
                <p class="text-xs leading-3 text-gray-300">Software engineer</p>
              </div>
            </div>
          </div>
          <div class="mt-6 flex flex-col justify-end items-center space-y-3 pb-5 ">
            <button class="flex jusitfy-end items-center space-x-6 w-full  focus:outline-none  focus:text-primary  text-white rounded ">
              <img
                class="fill-stroke "
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg4.svg"
                alt="dashboard"
              />
              <p class="text-base leading-4 ">Dashboard</p>
            </button>
            <button class="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-primary  text-white rounded ">
              <svg
                class="fill-stroke"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 10L11 14L17 20L21 4L3 11L7 13L9 19L12 15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-base leading-4  ">Berichten</p>
            </button>

            <button class="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-primary  text-white rounded ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 8.00002C15.1046 8.00002 16 7.10459 16 6.00002C16 4.89545 15.1046 4.00002 14 4.00002C12.8954 4.00002 12 4.89545 12 6.00002C12 7.10459 12.8954 8.00002 14 8.00002Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 6H12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 6H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12H6"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 12H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 20C18.1046 20 19 19.1046 19 18C19 16.8955 18.1046 16 17 16C15.8954 16 15 16.8955 15 18C15 19.1046 15.8954 20 17 20Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 18H15"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 18H20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-base leading-4  ">Instellingen</p>
            </button>
            <button class="flex jusitfy-start items-center space-x-6 w-full  focus:outline-none  focus:text-primary  text-white rounded ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p class="text-base leading-4  ">Beoordelingen</p>
            </button>
            <a
              href="http://localhost:3000/"
              className="absolute bottom-10 text-primary font-bold flex items-center"
            >
              <BiExit className="mr-3" /> Ga terug
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
