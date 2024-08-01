const Header = () => {
  return (
    <div className="h-fit flex flex-col gap-1 mb-10">

        {/* <div className="border-b w-fit bg-slate-900 flex flex-col items-start justify-center py-4 px-10 rounded-t-xl"> */}
          <h1 className="text-3xl">Välkommen Sara!</h1>
          <h2 className="text-gray-400">
            Här är ditt innehållshanteringssystem (CMS)
          </h2>
        {/* </div> */}

        {/* <div>
          <input
            type="text"
            className="bg-black/50 h-12 rounded-s shadow-xl shadow-blue-900/60 px-4"
          />
          <button className="h-12 bg-gradient-to-r from-gray-900 to-blue-900 rounded shadow-xl shadow-blue-900 w-20">
            Sök
          </button>
        </div> */}
    </div>
  );
};

export default Header;
