export default function SignButtonsMobile() {
  return (
    <div className="mt-6">
      <a
        href="/registreer"
        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-purple-500"
      >
        Registreer
      </a>
      <p className="mt-6 text-center text-base font-medium text-light">
        Bestaande klant?{" "}
        <a href="/login" className="text-primary">
          Log in
        </a>
      </p>
    </div>
  );
}
