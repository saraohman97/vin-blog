import Header from "./header";

// bg: bg-slate-900

const NavigationTabs = () => {
  return (
    <div className="h-10 flex gap-1 items-end">
      <div className="bg-blue-900 h-full w-fit flex flex-col items-center justify-center p-4 rounded-t-xl">
        {/* <h1 className="text-xl">Välkommen Sara!</h1>
        <h2 className="text-gray-400 text-sm">
          Här är ditt innehållshanteringssystem (CMS)
        </h2> */}
        Lägg till vin
      </div>

      <div className="bg-slate-900 h-full border bg-opacity-50 w-fit flex items-center justify-center p-4 rounded-t-xl">
        Vinlista
      </div>
    </div>
  );
};

export default NavigationTabs;
