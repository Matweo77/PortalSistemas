import { Sidebar } from './sidebar';
import { TopNav } from './top-nav';
import { Outlet } from 'react-router-dom';

export function DashboardLayout() {
  return (
    <div className="min-h-screen flex border border-r-2">
      <Sidebar className="border-r-1" />
      <div className="flex-1 ">
        <TopNav />
        <div className="container mx-auto p-6">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}