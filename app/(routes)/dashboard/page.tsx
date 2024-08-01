"use client";

import Link from "next/link";

const DashboardPage = () => {
  return (
    <div>
      Dashboard <br />
      <Link href="/dashboard/vin">Gå till vin</Link>
    </div>
  );
};

export default DashboardPage;
