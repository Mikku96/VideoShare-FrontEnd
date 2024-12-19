import Modal from "react-modal";
import { useState } from "react";
import Button from "../Button.jsx";

export default function VideoModal({ showVideo, setShowVideo }) {

    Modal.setAppElement("#root");

    return (
        <Modal isOpen={showVideo} id="videoModal" className=""
>            <Button
                buttonName={"Close"}
                runFunction={() => setShowVideo(false)}
                type={"button"}
                tailWindClass="text-white"
            />
        </Modal>
    );
}
