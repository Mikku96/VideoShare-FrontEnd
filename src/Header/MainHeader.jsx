import { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import VideoModal from "../Modal/VideoModal.jsx";


export default function MainHeader() {

  const[showVideo, setShowVideo] = useState(false);

  useEffect(() => {

  }, []);

  return (
      <>
          <div className="bg-[#1b1e2b] flex justify-center text-black ">
            <SearchBar />
          </div>
          <div className="min-h-screen"></div>
    </>
  );
}
