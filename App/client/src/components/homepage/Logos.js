import AlfaSVG from "./AlfaSVG";
import HanzeSVG from "./HanzeSVG";
import NoorderpoortSVG from "./NoorderpoortSVG";

function Logos() {
  return (
    <div className="flex mt-64 pt-6 2xl:pt-40 items-center px-14 place-content-between">
      <NoorderpoortSVG width="25%" />
      <HanzeSVG width="25%" />
      <AlfaSVG width="25%" />
    </div>
  );
}

export default Logos;
