export default function SignButtonsHeader() {
  return (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <a
        href="login"
        className="whitespace-nowrap text-base font-medium text-light hover:text-text-gray-400"
      >
        Log in
      </a>
      <a
        href="/registreer"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-purple-500"
      >
        Registreer
      </a>
    </div>
  );
}
