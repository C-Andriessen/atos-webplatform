/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [
    { name: "Opdrachten", href: "/opdrachten" },
    { name: "Studenten", href: "/studenten" },
    { name: "Scholen", href: "/scholen" },
    { name: "Over ons", href: "/over-ons" },
    { name: "Contact & Veelgestelde vragen", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#121212]">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base text-light hover:text-gray-300"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-primary">
          &copy; 2022 StuDienst bezitten alle rechten.
        </p>
      </div>
    </footer>
  );
}
