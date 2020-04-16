import React, { useRef, useState, useEffect } from 'react'
import { Row, Col } from 'react-materialize'
import Peer from "simple-peer";
import io from 'socket.io-client'


export default function Video() {
    const [myId, setMyId] = useState("");
    const [stream, setStream] = useState();


    const userVideo = useRef();
    const partnerVideo = useRef();
    const socket = useRef();


    useEffect(() => {
        socket.current = io.connect("/");
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            setStream(stream)
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        })

        socket.current.on("myId", (id) => {
            setMyId(id);
        })

        socket.current.on("hey", (data) => {

        })
    }, [])



    let UserVideo;
    if (stream) {
        UserVideo = (
            <video playsInline muted ref={userVideo} autoPlay className="user-video" />
        );
    }

    const callPeer = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        });

        peer.on("signal", data => {
            socket.current.emit("callUser", { userToCall: id, signalData: data, from: myId })
        })

        peer.on("stream", stream => {
            if (partnerVideo.current) {
                partnerVideo.current.srcObject = stream;
            }
        })

    }

    return (
        <Row>
            <Col
                className="video-wrapper"
                s={6}
            >
                <div className="video-container">
                    {UserVideo}
                </div>
            </Col>
            <Col
                className="video-wrapper"
                s={6}
            >
                2
            </Col>
        </Row>
    )
}
