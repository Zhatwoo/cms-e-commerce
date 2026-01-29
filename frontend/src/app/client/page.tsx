'use client';

import { ClientSidebar } from './components/sidebar';
import { ClientDashboard } from './components/dashboard';

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="flex min-h-screen w-full bg-white">
        {/* Sidebar */}
        <ClientSidebar />

        {/* Main content */}
        <ClientDashboard />
      </div>
    </div>
  );
}



