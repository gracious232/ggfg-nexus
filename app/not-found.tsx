import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-navy">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">404</p>
        <h1 className="mt-4 text-4xl font-semibold">The page you are looking for is not available.</h1>
        <p className="mt-4 text-base text-navy/70">Return to the home page and continue exploring GGFG.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white">Return home</Link>
      </div>
    </main>
  );
}
