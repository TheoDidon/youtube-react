import React from "react";
import Icon from "@mdi/react";
import { mdiMicrophone, mdiMagnify } from "@mdi/js";

function SearchBar() {
  return (
    <div className="flex justify-center items-center flex-grow max-w-lg">
      <input
        className=" border-gray-300 border-2 p-2 max-w-[120px] md:max-w-full"
        placeholder="Search"
      ></input>
      <div className="flex justify-center items-center bg-gray-100 border-gray-300 border-2 p-2">
        <Icon path={mdiMagnify} size={1} />
      </div>
      <Icon
        path={mdiMicrophone}
        size={1}
        className="bg-gray-100 rounded-full m-4 min-w-11 min-h-11 p-2"
      />
    </div>
  );
}

export default SearchBar;
