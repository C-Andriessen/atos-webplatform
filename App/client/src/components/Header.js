import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="text-white flex items-center justify-between px-14 py-6 z-10 relative">
        <div className="flex items-center space-x-8">
          <h3 className="text-3xl font-bold">
            Student<span className="text-primary">IN</span>Werk
          </h3>
          <nav className="flex space-x-5 text-xl">
            <a href="http://localhost:3000">Home</a>
            <a href="http://localhost:3000">Scholen</a>
            <a href="http://localhost:3000">Studenten</a>
            <a href="http://localhost:3000">Over ons</a>
          </nav>
        </div>
        <a href="http://localhost:3000/dashboard">
          <FaUser className="h-10 w-6" />
        </a>
      </header>
    </>
  );
}

export default Header;
