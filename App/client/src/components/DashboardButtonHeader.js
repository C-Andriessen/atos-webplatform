export default function DashboardButtonHeader() {
  return (
    <div className="mt-6">
      <a
        href="/dashboard"
        className="mb-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-purple-500"
      >
        Ga naar dashboard
      </a>
      <a
        href="/logout"
        className="mt-8 text-center text-base font-medium text-light hover:text-primary"
      >
        Log uit
      </a>
    </div>
  );
}
