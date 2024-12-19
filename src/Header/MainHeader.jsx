import { useState } from "react";
import SearchBar from "./SearchBar.jsx";

export default function MainHeader() {

  return (
      <>
        <div className="bg-[#1b1e2b] flex justify-center text-black ">
          <SearchBar />
        </div>
    </>
  );
}
