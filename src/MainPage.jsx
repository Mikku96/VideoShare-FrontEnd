import { useState, useEffect } from "react";

import VideoModal from "./Modal/VideoModal.jsx";
import MainHeader from "./Header/MainHeader.jsx";
import Grid from "./VideoGrid/Grid.jsx";
import NavBar from "./Navigation/NavBar.jsx";
import Options from "./Options/Options.jsx"

export default function MainPage() {

  const[showVideo, setShowVideo] = useState(false);

  const[chosenVideo, setChosenVideo] = useState("");

  const [howManyShown, setHowManyShown] = useState({
    choise: 25,
    options: [5, 10, 25, 50],
    title: "Videos per page"
  });

  const [orderBy, setOrderBy] = useState({
    choise: "Newest",
    options: ["Newest", "Oldest", "Top views", "Incomplete info"],
    title: "Sort by"
  });

  useEffect(() => {
    if (chosenVideo !== "") {
      setShowVideo(true);
    }
}, [chosenVideo]);

  return (
    <>
        <MainHeader />

        <Options 
        howManyShown = {howManyShown}
        setHowManyShown = {setHowManyShown}
        orderBy = {orderBy}
        setOrderBy = {setOrderBy}
        />

        <div className="min-h-screen">
          <Grid 
          setChosenVideo = {setChosenVideo}
          howManyShown = {howManyShown.choise}
          />
        </div>
        <VideoModal 
        chosenVideo = {chosenVideo}
        showVideo = {showVideo}
        setShowVideo = {setShowVideo}
        setChosenVideo = {setChosenVideo}
        />
        <NavBar />
    </>
  );
}
