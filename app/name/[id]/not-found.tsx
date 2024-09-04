import Link from "next/link";
import { CiFaceFrown } from "react-icons/ci";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-160px)] flex-col items-center justify-center gap-2">
      <CiFaceFrown className="h-20 w-20 text-gray-400" />
      <h2 className="text-xl font-semibold text-white">404 Not Found</h2>
      <p className="text-white">Work in progress...... 🚧</p>
      <Link
        href="/"
        className="mt-10 rounded-md bg-orange px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-orange/70"
      >
        Go Back
      </Link>
    </div>
  );
}
