const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Välkommen Sara!</h1>
          <h2 className="text-gray-400 mb-6">
            Här är ditt innehållshanteringssystem (CMS)
          </h2>
        </div>

        <div>
          <input
            type="text"
            className="bg-black/50 h-12 rounded-s shadow-xl shadow-blue-900/60 px-4"
          />
          <button className="h-12 bg-gradient-to-r from-gray-900 to-blue-900 rounded shadow-xl shadow-blue-900 w-20">
            Sök
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
