'use client';

import Link from 'next/link';

export function LandingHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex w-full items-center justify-between bg-transparent pl-[7.5rem] pr-[7.5rem] py-6 md:pl-[15rem] md:pr-[15rem] md:pb-32 md:pt-8">
      <Link
        href="/"
        className="text-2xl font-medium tracking-wide text-white md:text-3xl"
        style={{ fontFamily: "'Great Vibes', cursive" }}
      >
        Mercato
      </Link>
      <nav className="flex items-center gap-6">
        <Link
          href="/login"
          className="text-sm font-medium text-white/95 transition hover:text-white"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-white/95"
        >
          Start for free
        </Link>
      </nav>
    </header>
  );
}
