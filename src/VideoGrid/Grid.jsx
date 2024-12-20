// Consist of:
// Grid of Thumbnails obtained from the BackEnd (useEffect)

// Size depends on user choise of how many videos are to be shown
// ... Should CONSIDER how this functions with different resolutions (size of grid)

// Flex would be better than the typical grid!

// FOR NOW! Without Back End, we use sample images for thumbnails

// Later on, the images should be "downloaded" from the Back End...
// No idea yet, how that then works (blob!)

import {useState, useEffect} from "react";

import Thumbnail from "./Thumbnail.jsx";

import sampleImage from "../../public/sample.jpg";

export default function Grid ( {setChosenVideo, howManyShown} ) {

    // Array of objects
    const [filteredVideoInfos, setVideoInfos] = useState([]);

    useEffect(() => {
        let videoData = [];
        for (let i = 0; i < 50; i++) {
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

    // Run this, when user changes ordering settings etc.
    /*useEffect(() => {
        const filteredVideos = ""; etc.
    }, [orderChange]);*/

    return (
        <>
        <ul className="flex flex-row flex-wrap gap-y-5 gap-x-5 m-12 justify-center">
            {filteredVideoInfos
              .filter((_, index) => howManyShown > index)
              .map((videoInfo) => (
                <Thumbnail
                  videoInfo={videoInfo}
                  setChosenVideo={setChosenVideo}
                />
            ))}
        </ul>
        </>
    );
}