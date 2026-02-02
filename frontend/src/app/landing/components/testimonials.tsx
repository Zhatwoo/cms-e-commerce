'use client';

import dynamic from 'next/dynamic';

const Globe3D = dynamic(
  () => import('./Globe3D').then((m) => m.Globe3D),
  { ssr: false }
);

export function Testimonials() {
  return (
    <section className="relative flex-shrink-0 w-full overflow-hidden bg-transparent px-6 pt-8 pb-8 md:px-10 md:pt-12 md:pb-12">
      {/* Gradient background with clip-path — raised 10% from previous */}
      <div
        className="absolute inset-0 z-0 w-full"
        style={{
          background: 'linear-gradient(to right, #06143E 0%, transparent 50%), linear-gradient(to bottom, #0a2a7a 0%, #020b2a 28%, #020205 58%, #020205 100%)',
          clipPath: 'polygon(0 20%, 100% 5%, 100% 100%, 0 100%)',
          transform: 'translateY(10%)',
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* What they say about us */}
        <div className="relative">
          <h2 className="relative z-20 text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            What they{' '}
            <span className="relative inline-block">
              say about us.
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-500"
                aria-hidden
              />
            </span>
          </h2>

          {/* 3D Globe — square container so sphere renders correctly (raised 15%, 10% smaller, 10% left) */}
          <div
            className="absolute left-[90%] top-24 z-10 -translate-x-1/2 -translate-y-[15%] md:top-32"
            aria-hidden
          >
            <div
              className="relative aspect-square h-[64rem] w-[64rem] scale-[1.125] overflow-hidden rounded-full md:h-[80rem] md:w-[80rem]"
              style={{ isolation: 'isolate' }}
            >
              <Globe3D className="absolute inset-0 size-full" />
              {/* Soft fade at circle edge so the cut isn't visible */}
              <div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 32%, rgba(2, 11, 42, 0.25) 55%, rgba(0, 0, 0, 0.6) 78%, rgba(0, 0, 0, 0.92) 100%)',
                }}
                aria-hidden
              />
            </div>
          </div>

        </div>

        {/* Contact Us — in place of testimonial cards; minimal gap before footer */}
        <div className="relative z-20 mb-6 mt-12 max-w-4xl translate-x-[-15%] translate-y-[12%] md:mt-16 md:mb-8">
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-white bg-black p-8 shadow-xl md:p-10">
            <h3 className="text-center text-2xl font-bold text-white md:text-3xl">
              Contact Us
            </h3>
            <form className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-white">
                  First Name:
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-white">
                  Last Name:
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-white">
                  Company:
                </label>
                <input
                  id="company"
                  type="text"
                  className="w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                  Email:
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full rounded-lg border border-neutral-600 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder=""
                />
              </div>
            </form>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className="rounded-lg border-2 border-white bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
