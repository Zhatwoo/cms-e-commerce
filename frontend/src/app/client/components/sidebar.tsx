'use client';

import React, { useState, type ReactNode } from 'react';

type SidebarItem = {
  id: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
};

const FolderIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4 stroke-[1.7]"
  >
    <path
      d="M3.75 7.5A1.75 1.75 0 0 1 5.5 5.75h4.086c.3 0 .59.12.801.332l1.18 1.18c.211.211.5.338.8.338H18.5A1.75 1.75 0 0 1 20.25 9.25v8A1.75 1.75 0 0 1 18.5 19H5.5A1.75 1.75 0 0 1 3.75 17.25v-9.75Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TemplateIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4 stroke-[1.7]"
  >
    <rect
      x="4"
      y="5"
      width="16"
      height="14"
      rx="2"
      fill="none"
      stroke="currentColor"
    />
    <path
      d="M8 9h8M8 12h5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4 stroke-[1.7]"
  >
    <path
      d="M10.5 4.5h3l.6 2.1a1 1 0 0 0 .6.68l2 .8 1.8-1.3 2.1 2.1-1.3 1.8.8 2a1 1 0 0 0 .06.12L19.5 15l-2.1.6-.8 2a1 1 0 0 0-.06.12l-2.1.6h-3l-.6-2.1a1 1 0 0 0-.6-.68l-2-.8-1.8 1.3-2.1-2.1 1.3-1.8-.8-2a1 1 0 0 0-.06-.12L4.5 9l2.1-.6.8-2a1 1 0 0 0 .06-.12Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="none" stroke="currentColor" />
  </svg>
);

const SignOutIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4 stroke-[1.7]"
  >
    <path
      d="M10 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M14 16l3-4-3-4M9 12h8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const items: SidebarItem[] = [
  { id: 'projects', label: 'Projects', icon: <FolderIcon />, active: true },
  { id: 'templates', label: 'Templates', icon: <TemplateIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

export function ClientSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden border-r border-[#66666640] bg-black py-6 text-sm text-[#f5f5f5] md:flex md:flex-col transition-[width] duration-200 ${
        collapsed ? 'w-16 px-2' : 'w-56 px-4'
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        {!collapsed && <span className="text-xs font-medium">Workspace</span>}
        <button
          type="button"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={() => setCollapsed((prev) => !prev)}
          className="inline-flex h-6 w-10 items-center rounded-full border border-[#ffffff40] bg-black px-1 transition-colors hover:border-white"
        >
          <span
            className={`h-4 w-4 rounded-full bg-white transition-transform duration-200 ${
              collapsed ? 'translate-x-0' : 'translate-x-4'
            }`}
          />
        </button>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const isActive = item.active;
          return (
            <button
              key={item.id}
              type="button"
              aria-label={collapsed ? item.label : undefined}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors ${
                isActive
                  ? 'bg-white text-black shadow-sm'
                  : 'hover:bg-white/10'
              }`}
            >
              <span className="flex h-5 w-5 items-center justify-center text-base" aria-hidden="true">
                {item.icon}
              </span>
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        aria-label={collapsed ? 'Sign out' : undefined}
        className="mt-auto flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-[#f5f5f5] transition-colors hover:bg-white/10"
      >
        <span className="flex h-5 w-5 items-center justify-center text-base" aria-hidden="true">
          <SignOutIcon />
        </span>
        {!collapsed && <span>Sign Out</span>}
      </button>
    </aside>
  );
}

