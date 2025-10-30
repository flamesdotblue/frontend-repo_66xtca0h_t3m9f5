import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoCard = ({ video }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 text-[11px] font-semibold px-1.5 py-0.5 rounded bg-black/80 text-white">
          {video.duration}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <PlayCircle className="h-10 w-10 text-white drop-shadow" />
        </div>
      </div>
      <div className="mt-3 flex gap-3">
        <img
          src={video.avatar}
          alt={video.channel}
          className="h-9 w-9 rounded-full object-cover"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="font-semibold leading-snug line-clamp-2">{video.title}</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 truncate">
            {video.channel} • {video.views} views • {video.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
