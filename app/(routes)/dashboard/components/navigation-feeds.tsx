import { PiCircleDuotone, PiCircleFill } from "react-icons/pi";

const NavigationFeeds = () => {
  return (
    <div className="w-72 flex flex-col items-center justify-center text-sm font-thin">
      <div>
        <div className="flex gap-2 items-center">
          <PiCircleDuotone size={10} />
          Lägg till vin
        </div>

        <div className="ml-1 h-20 border-l border-gray-700" />

        <div className="flex gap-2 items-center">
          <PiCircleFill size={10} />
          Vinlista
        </div>
      </div>
    </div>
  );
};

export default NavigationFeeds;
