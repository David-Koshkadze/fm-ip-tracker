import React from "react";

export default function Search({ handleSubmit }: any) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input className="rounded-md w-32" value="" />
        <input type="submit" className="" />
      </div>
    </form>
  );
}
