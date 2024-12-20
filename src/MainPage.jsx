import { useState, useEffect } from "react";

import VideoModal from "./Modal/VideoModal.jsx";
import MainHeader from "./Header/MainHeader.jsx";
import Grid from "./VideoGrid/Grid.jsx";
import NavBar from "./Navigation/NavBar.jsx";
import Options from "./Options/Options.jsx"

import sampleImage from "../public/sample.jpg";

export default function MainPage() {

  const[amountOfVideos, setAmountOfVideos] = useState(50);
  const[currentPage, setCurrentPage] = useState(1);
  const [howManyShown, setHowManyShown] = useState({
    choice: 5,
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

  const [loading, setLoading] = useState(true);

  // Array of objects
  const [allVideos, setVideoInfos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let videoData = [];
      for (let i = 0; i < amountOfVideos; i++) {
          videoData.push({
              id: i, 
              thumbnail:sampleImage, 
              name: "Cat Video " + i, 
              stats: {views: 100+i, likes: 10+i},
              state: [true, false, false],
              url: `Url for video ${i}`
          })
      }
      setVideoInfos(videoData);
      setFilteredVideos(videoData);
      setLoading(false);
    }
    setLoading(true);
    loadData();
  }, []);

  useEffect(() => {
    setFilteredVideos(allVideos.slice(
      (currentPage - 1)*howManyShown.choice, (currentPage)*howManyShown.choice
    ));
  }, [currentPage, allVideos])

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
        {!loading ?
        <div className="">
          <Grid 
          filteredVideoInfos = {filteredVideos}
          setChosenVideo = {setChosenVideo}
          howManyShown = {howManyShown.choice}
          amountOfVideos = {amountOfVideos}
          />
        </div>
        :
        <div className="w-12 h-12 m-auto text-white text-3xl animate-pulse">Loading</div>
        }
        <VideoModal 
        chosenVideo = {chosenVideo}
        showVideo = {showVideo}
        setShowVideo = {setShowVideo}
        setChosenVideo = {setChosenVideo}
        />
        <div className="min-h-screen">
          <NavBar 
          videosPerPage = {howManyShown.choice}
          amountOfVideos = {amountOfVideos}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
          />
        </div>
    </>
  );
}
