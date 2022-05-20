/* This example requires Tailwind CSS v2.0+ */
export default function LogoCloud() {
  return (
    <div className="bg-darkmode">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="./images/noorderpoort.svg"
              alt="Noorderpoort"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="./images/alfa-college.svg"
              alt="Alfa college"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="./images/hanzehogeschool.svg"
              alt="Hanze hogeschool"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img className="h-12" src="./images/rug.png" alt="Transistor" />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="./images/terra-mbo.png"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
