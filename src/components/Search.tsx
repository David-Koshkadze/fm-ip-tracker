import React from "react";

export default function Search({
  handleSubmit,
  inputValue,
  setInputValue,
}: any) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-3/4 md:w-96 mx-auto">
        <input
          className="rounded-xl w-full py-3 pl-2 pr-20 text-black outline-none"
          placeholder="Search for any IP address or domain"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <input
          type="submit"
          className="absolute right-0 bg-gray-900 text-white rounded-r-xl w-12 h-12 cursor-pointer"
          value=">"
        />
      </div>
    </form>
  );
}
