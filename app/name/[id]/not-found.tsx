import Link from "next/link";
import { CiFaceFrown } from "react-icons/ci";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-160px)] flex-col items-center justify-center gap-2">
      <CiFaceFrown className="h-20 w-20 text-gray-400" />
      <h2 className="text-xl font-medium leading-[35px] text-white">
        Work in progress...... 🚧
      </h2>
      <p className="w-[420px] text-pretty text-center text-sm text-grey">
        As I am working on this project alone—managing the design, development,
        and data collection—it may take some time. Thank you for your patience
        and understanding.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-md bg-orange px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-orange/70"
      >
        Go Back
      </Link>
    </div>
  );
}
