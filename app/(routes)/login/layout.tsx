import getCurrentUser from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  currentUser && redirect("/dashboard");

  return <div>{children}</div>;
}
