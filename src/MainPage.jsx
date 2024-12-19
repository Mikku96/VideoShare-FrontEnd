import { useState, useEffect } from "react";

import VideoModal from "./Modal/VideoModal.jsx";
import MainHeader from "./Header/MainHeader.jsx";
import Grid from "./VideoGrid/Grid.jsx";

export default function MainPage() {

  const[showVideo, setShowVideo] = useState(false);

  const[chosenVideo, setChosenVideo] = useState("");

  useEffect(() => {
    if (chosenVideo !== "") {
      setShowVideo(true);
    }
}, [chosenVideo]);

  return (
    <>
        <MainHeader />
        <div className="min-h-screen">
          <Grid 
          setChosenVideo = {setChosenVideo}
          />
        </div>
        <VideoModal 
        chosenVideo = {chosenVideo}
        showVideo = {showVideo}
        setShowVideo = {setShowVideo}
        setChosenVideo = {setChosenVideo}
        />
    </>
  );
}
