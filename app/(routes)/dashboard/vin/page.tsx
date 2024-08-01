// main: bg-blue-900
// main: bg-slate-800
// darkmode: 9,9,11 RGB, 09090B hexcode

import WineForm from "./components/wine-form";
import DashboardNavbar from "../components/dashboard-navbar";
import Header from "../components/header";
import NavigationFeeds from "../components/navigation-feeds";
import NavigationTabs from "../components/navigation-tabs";

const Dashboard = () => {
  return (
    <div className="relative h-screen text-gray-50">
      <DashboardNavbar />

      <div className="fixed left-80 top-0 bottom-0 right-0 rounded-l-2xl h-full">
        <NavigationTabs />
        <div className="bg-slate-900 w-full p-10 pb-20 h-full overflow-y-scroll scroll-smooth">
          <div>
            <Header />
            <WineForm />
          </div>
          {/* <NavigationFeeds /> */}
        </div>
      </div>
      {/* <NavigationFeeds /> */}
    </div>
  );
};

export default Dashboard;
