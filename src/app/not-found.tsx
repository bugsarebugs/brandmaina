import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-dvw h-dvh space-y-4">
      <h1 className="text-2xl font-semibold">Sorry. We Will Be Back Soon.</h1>
      <p className="text-gray-500">Please check back later.</p>
      <Link href="/" className="text-blue-500 font-extrabold text-3xl">Return <span className="text-white">Home</span></Link>
    </div>
  );
}
