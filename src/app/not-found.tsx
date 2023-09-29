import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mt-16 text-center grid gap-4 justify-items-center md:mt-32">
      <h2 className="font-bold text-3xl md:text-5xl">Not Found Page...</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="font-semibold shadow-lg px-3 py-2 inline-block rounded-lg hover:bg-black transition-colors duration-300 hover:text-white dark:bg-white dark:text-black dark:hover:bg-dark-soft dark:hover:text-white">
        Return Home
      </Link>
    </div>
  );
}
