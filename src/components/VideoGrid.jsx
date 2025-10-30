import React from 'react';
import VideoCard from './VideoCard';

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid gap-6 sm:gap-7 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} />
      ))}
    </div>
  );
};

export default VideoGrid;
