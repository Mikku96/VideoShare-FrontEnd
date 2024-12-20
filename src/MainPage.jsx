import { useState, useEffect } from "react";

import VideoModal from "./Modal/VideoModal.jsx";
import MainHeader from "./Header/MainHeader.jsx";
import Grid from "./VideoGrid/Grid.jsx";
import NavBar from "./Navigation/NavBar.jsx";
import Options from "./Options/Options.jsx"

import sampleImage from "../public/sample.jpg";

export default function MainPage() {

  const[amountOfVideos, setAmountOfVideos] = useState(51);
  const[currentPage, setCurrentPage] = useState(1);
  const [howManyShown, setHowManyShown] = useState({
    choise: 25,
    options: [5, 10, 25, 50],
    title: "Videos per page"
  });

  const[showVideo, setShowVideo] = useState(false);
  const[chosenVideo, setChosenVideo] = useState("");


  const [orderBy, setOrderBy] = useState({
    choise: "Newest",
    options: ["Newest", "Oldest", "Top views", "Incomplete info"],
    title: "Sort by"
  });

  // Array of objects
  const [filteredVideoInfos, setVideoInfos] = useState([]);

  useEffect(() => {
      let videoData = [];
      for (let i = 0; i < amountOfVideos; i++) {
          videoData.push({
              id: i, 
              thumbnail:sampleImage, 
              name: "Cat Video "+i, 
              stats: {views: 100+i, likes: 10+i},
              state: [true, false, false],
              url: "url that gets the video data such as tags and the VIDEO itself"
          })
      }
      setVideoInfos(videoData);
  }, []);

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

        <div className="">
          <Grid 
          filteredVideoInfos = {filteredVideoInfos}
          setChosenVideo = {setChosenVideo}
          howManyShown = {howManyShown.choise}
          amountOfVideos = {amountOfVideos}
          />
        </div>
        <VideoModal 
        chosenVideo = {chosenVideo}
        showVideo = {showVideo}
        setShowVideo = {setShowVideo}
        setChosenVideo = {setChosenVideo}
        />
        <div className="min-h-screen">
          <NavBar 
          videosPerPage = {howManyShown.choise}
          amountOfVideos = {amountOfVideos}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          />
        </div>
    </>
  );
}
