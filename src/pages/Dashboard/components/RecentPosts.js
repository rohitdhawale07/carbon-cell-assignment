import React from "react";
import { IoLogoFirebase } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

function RecentPosts() {
  return (
    <div className="bg-[#171717]  text-[#CACECA] p-2 rounded-2xl">
      <div>
        <h1 className="text-center text-white font-semibold text-xl pb-2">
          Recent posts
        </h1>
        <hr />
        <div
          className="my-4 bg-[#000000] rounded-2xl flex items-start justify-around p-2 gap-2 overflow-hidden "
          style={{ height: 190 + "px" }}
        >
          <div>
            <IoLogoFirebase className="text-[#16A34A] text-2xl p-1 rounded-full bg-white" />
          </div>
          <div className="overflow-hidden">
            <span className="flex items-center gap-1"><strong>Lorem ipsum dolor</strong> <MdVerified />:</span>  sit amet consectetur adipisicing
            elit. Ipsam incidunt dolor vel architecto aperiam doloremque dolorum
            recusandae temporibus suscipit distinctio! incidunt dolor vel architecto, aperiam incidunt dolor vel architecto aperiam ... <span className="text-blue-400 cursor-pointer">show more</span>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-center my-3">
          <button className="bg-[#16A34A] px-2 py-1 hover:bg-green-700 rounded-md text-[#F0E89C]">
            Follow us on x
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;
