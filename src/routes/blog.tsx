import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TopBar } from "@/components/site/TopBar";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/blog")({
  component: BlogLayout,
});

function BlogLayout() {
  return (
    <div className="min-h-screen bg-navy text-cream">
      <TopBar />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
