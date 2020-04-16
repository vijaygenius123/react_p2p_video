import React, { useRef, useState, useEffect } from 'react'
import { Row, Col } from 'react-materialize'



export default function Video() {
    const [stream, setStream] = useState();


    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            setStream(stream)
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        }
        )
    })

    const userVideo = useRef();

    let UserVideo;
    if (stream) {
        UserVideo = (
            <video playsInline muted ref={userVideo} autoPlay className="user-video" />
        );
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
