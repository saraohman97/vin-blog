// main: bg-blue-900
// main: bg-slate-800
// darkmode: 9,9,11 RGB, 09090B hexcode

import WineForm from "./components/wine-form";
import DashboardNavbar from "./components/dashboard-navbar";
import Header from "./components/header";
import NavigationFeeds from "./components/navigation-feeds";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen text-gray-50">
      <DashboardNavbar />

      <div className="bg-slate-900 fixed w-screen-[2/3] left-80 top-0 bottom-0 right-0 rounded-l-2xl p-10">
        <Header />
        <div className="flex">
          <WineForm />
          <NavigationFeeds />
        </div>

        {/* CMS */}
        {/* <div>
          <div className="bg-slate-500 rounded-xl p-10 shadow-xl shadow-slate-600">
            kub
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
