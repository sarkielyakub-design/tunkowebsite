import Link from "next/link";

export default function AuthLogo() {
  return (
    <Link
      href="/"
      className="mb-10 flex items-center gap-3"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
        T
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Tunko
        </h2>

        <p className="text-sm text-slate-500">
          Money Transfer
        </p>
      </div>
    </Link>
  );
}