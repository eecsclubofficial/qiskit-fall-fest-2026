import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-foundation-bg text-foundation-light px-4 text-center">
      <h1 className="text-6xl sm:text-8xl font-mono font-bold text-qiskit-blue mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
        Page not found
      </h2>
      <p className="text-sm font-mono text-[#BDCDEF] max-w-md mb-8">
        The quantum state you are looking for has collapsed or does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded bg-qiskit-magenta hover:bg-[#d83f81] text-white text-sm font-semibold tracking-wide transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
