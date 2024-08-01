"use client";

function Filter() {
  function handleFilter(filter) {
    console.log(filter);
  }
  return (
    <div className="border border-primary-800 flex">
      <button
        onClick={() => handleFilter("all")}
        className="px-5 py-5 hover:bg-primary-700"
      >
        All cabins
      </button>
      <button
        onClick={() => handleFilter("small")}
        className="px-5 py-5 hover:bg-primary-700"
      >
        1&mdash;3 guests
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className="px-5 py-5 hover:bg-primary-700"
      >
        4&mdash;7 guests
      </button>
      <button
        onClick={() => handleFilter("large")}
        className="px-5 py-5 hover:bg-primary-700"
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
