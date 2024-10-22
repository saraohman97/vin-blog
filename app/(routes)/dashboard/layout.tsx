import Navbar from "./navbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //redirect from next/navigation = protected routes
  //eventually sidebar x menu x navbar
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="p-4 bg-white">{children}</div>
    </div>
  );
}
