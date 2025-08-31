import { redirect } from "next/navigation";
import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "./navbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
    if (!currentUser) {
    redirect("/");
  }

  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen bg-white">
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
}
