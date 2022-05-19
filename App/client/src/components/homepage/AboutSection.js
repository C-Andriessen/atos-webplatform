import { BsFillPeopleFill } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

function AboutSection() {
  return (
    <>
      <div className="text-white items-center flex flex-col text-center space-y-7 mt-40">
        <h4 className="text-3xl">Over ons</h4>
        <h2 className="text-5xl font-bold">
          Student<span className="text-primary">IN</span>Werk
        </h2>
        <p className="text-light text-2xl w-1/2">
          Op onze website kan je kiezen uit verschillende studenten die graag
          werkervaring willen opdoen met echt werk.
        </p>
      </div>
      <div className="text-white flex text-center px-14 justify-between mt-14 mb-12">
        <div className="flex flex-col items-center w-[30%]">
          <div className="bg-[#393B41] w-fit p-3 rounded-full drop-shadow">
            <BsFillPeopleFill className="w-14 h-14 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mt-2">Over de student</h3>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia
            eleifend tellus sit amet congue. Sed auctor ante risus, eget
            sollicitudin libero tristique id.
          </p>
          <a
            href="http://localhost:3000"
            className="text-primary text-xl font-bold mt-5"
          >
            Lees meer
          </a>
        </div>

        <div className="flex flex-col items-center w-[30%]">
          <div className="bg-[#393B41] w-fit p-3 rounded-full drop-shadow">
            <FaPeopleCarry className="w-14 h-14 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mt-2">Over onze werkwijze</h3>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia
            eleifend tellus sit amet congue. Sed auctor ante risus, eget
            sollicitudin libero tristique id.
          </p>
          <a
            href="http://localhost:3000"
            className="text-primary text-xl font-bold mt-5"
          >
            Lees meer
          </a>
        </div>

        <div className="flex flex-col items-center w-[30%]">
          <div className="bg-[#393B41] w-fit p-3 rounded-full drop-shadow">
            <IoMdSchool className="w-14 h-14 text-primary" />
          </div>
          <h3 className="text-3xl font-bold mt-2">Over de scholen</h3>
          <p className="text-xl mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia
            eleifend tellus sit amet congue. Sed auctor ante risus, eget
            sollicitudin libero tristique id.
          </p>
          <a
            href="http://localhost:3000"
            className="text-primary text-xl font-bold mt-5"
          >
            Lees meer
          </a>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
