import getCurrentUser from "@/actions/getCurrentUser";
import Navbar from "./navbar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //eventually sidebar x menu x navbar

    const currentUser = await getCurrentUser();
    !currentUser && redirect("/login");

  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen bg-white">
      <Navbar />
      <div className="p-4">{children}</div>
    </div>
  );
}
