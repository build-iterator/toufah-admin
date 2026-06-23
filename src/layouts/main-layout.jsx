import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/layouts/admin-sidebar";
import TopBar from "@/layouts/topbar";

export default function MainLayout() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <TopBar />
        <div className="p-2 sm:p-3 md:p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
