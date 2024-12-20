import Modal from "react-modal";
import { useState } from "react";
import Button from "../Button.jsx";

import ReactPlayer from "react-player/file";

export default function VideoModal({ chosenVideo, showVideo, setShowVideo, setChosenVideo }) {

    Modal.setAppElement("#root");

    function closeModal() {
        setShowVideo(false);
        setChosenVideo("");
    }

    return (
        <Modal isOpen={showVideo} id="videoModal" className="bg-black"
>            <Button
                buttonName={"Close"}
                runFunction={() => closeModal()}
                type={"button"}
                tailWindClass="text-white"
            />
            <p className="text-gray-50">{chosenVideo}</p>
            <ReactPlayer 
            controls = {true}
            url={chosenVideo} />
        </Modal>
    );
}
