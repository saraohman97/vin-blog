const WineForm = () => {
  return (
    <div className="w-full">
      <h1 className="my-2 text-2xl font-bold text-blue-900">Lägg till vin</h1>

      <div className="flex items-center gap-10 w-full">
        {/* NAME */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name" className="font-bold text-blue-900">
            Namn
          </label>
          <input
            type="text"
            className="bg-slate-900 bg-opacity-50 px-4 py-2 rounded w-full"
          />
        </div>
        {/* LABEL */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name" className="font-bold">
            Märke
          </label>
          <input
            type="text"
            className="bg-white bg-opacity-50 px-4 py-2 rounded w-full"
          />
        </div>
      </div>

      {/* DESC */}
      <div className="flex flex-col gap-1 mt-4">
        <label className="font-bold" htmlFor="desc">
          Beskrivning
        </label>
        <textarea
          name="desc"
          id="desc"
          className="bg-white bg-opacity-50 px-4 py-2 rounded"
          rows={5}
        ></textarea>
      </div>

      <div className="mt-4">Color •••</div>
      <div>Flavour •••••</div>

      <div>Country, price, graphe</div>

      <div>Review</div>
    </div>
  );
};

export default WineForm;
