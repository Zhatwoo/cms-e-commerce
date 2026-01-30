import React from 'react';

export function ClientDashboard() {
  return (
    <main className="flex-1 px-4 py-6 md:px-6 md:py-8">
      <section className="space-y-8">
        {/* Dashboard hero row */}
        <div className="space-y-3">
          <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
          <div className="rounded-xl border border-[#66666633] bg-white p-4 shadow-sm">
            <div className="flex h-28 items-start justify-start rounded-lg bg-[#6666660d] px-4 py-3">
              <button
                type="button"
                className="rounded-md bg-[#0070F3] px-3 py-1 text-xs font-medium text-white shadow-sm"
              >
                Create
              </button>
            </div>
          </div>
        </div>

        {/* Projects row */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold tracking-tight">Projects</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative h-28 rounded-lg bg-[#66666614]">
              <div className="absolute bottom-3 left-3 flex gap-2 text-[11px] font-medium">
                <button
                  type="button"
                  className="rounded-sm bg-[#666666] px-2 py-0.5 text-white shadow-sm"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="rounded-sm bg-[#0070F3] px-2 py-0.5 text-white shadow-sm"
                >
                  Publish
                </button>
              </div>
            </div>
            <div className="h-28 rounded-lg bg-[#66666614]" />
            <div className="h-28 rounded-lg bg-[#66666614]" />
          </div>
        </section>

        {/* Templates row */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold tracking-tight">Templates</h2>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="h-24 rounded-lg bg-[#66666614]" />
            <div className="h-24 rounded-lg bg-[#66666614]" />
            <div className="h-24 rounded-lg bg-[#66666614]" />
            <div className="h-24 rounded-lg bg-[#66666614]" />
          </div>
        </section>
      </section>
    </main>
  );
}


