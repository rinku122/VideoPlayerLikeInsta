import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
// import CenterVideoPlayer from "./VideoPlayer";

function App() {
  const [muted, setMuted] = useState(true);

  const [videoData] = useState([
    "https://stage-s3-dabbler.s3.ap-south-1.amazonaws.com/video_compressed/653cd77c8b3ff.mp4",
    "https://prod-skoda.s3.ap-south-1.amazonaws.com/video/Skoda-Final.mp4",
  ]);

  return (
    <div className="App">
      <button onClick={() => setMuted(!muted)}>Play audio</button>
      <VideoPlayer
        muted={muted}
        videoData="https://stage-s3-dabbler.s3.ap-south-1.amazonaws.com/video_compressed/653cd77c8b3ff.mp4"
      />
      <VideoPlayer
        muted={muted}
        videoData="https://prod-skoda.s3.ap-south-1.amazonaws.com/video/Skoda-Final.mp4"
      />
    </div>
  );
}

export default App;
