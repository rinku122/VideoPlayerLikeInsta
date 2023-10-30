import React, { useRef, useEffect, useState } from "react";

function VideoPlayer({ videoData, muted }) {
  const videoRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // 0.5 means when 50% of the video is in the viewport
  };

  useEffect(() => {
    const video = videoRef.current;

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
      setIsInViewport(entry.isIntersecting);
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div>
      <video
        style={{ display: "block" }}
        ref={videoRef}
        src={videoData}
        autoPlay={isInViewport}
        loop
        muted={muted}
        width="500"
        height="1000"
      />
    </div>
  );
}

export default VideoPlayer;
