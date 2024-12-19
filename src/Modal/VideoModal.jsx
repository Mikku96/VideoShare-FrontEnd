import Modal from "react-modal";
import { useState } from "react";
import Button from "../Button.jsx";

export default function VideoModal({ chosenVideo, showVideo, setShowVideo, setChosenVideo }) {

    Modal.setAppElement("#root");

    function closeModal() {
        setShowVideo(false);
        setChosenVideo("");
    }

    return (
        <Modal isOpen={showVideo} id="videoModal" className=""
>            <Button
                buttonName={"Close"}
                runFunction={() => closeModal()}
                type={"button"}
                tailWindClass="text-white"
            />
            <p>{chosenVideo}</p>
        </Modal>
    );
}
