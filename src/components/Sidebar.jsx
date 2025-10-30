import React from 'react';
import { Home, Compass, PlayCircle, Clock, ThumbsUp, Settings } from 'lucide-react';

const items = [
  { key: 'For You', icon: Home },
  { key: 'Explore', icon: Compass },
  { key: 'Shorts', icon: PlayCircle },
  { key: 'Watch Later', icon: Clock },
  { key: 'Liked', icon: ThumbsUp },
  { key: 'Settings', icon: Settings },
];

const Sidebar = ({ selected, onSelect }) => {
  return (
    <aside className="hidden md:block w-64 shrink-0 h-[calc(100vh-56px)] sticky top-[56px] border-r border-neutral-200 dark:border-neutral-800">
      <nav className="p-3 space-y-1">
        {items.map(({ key, icon: Icon }) => {
          const active = selected === key;
          return (
            <button
              key={key}
              onClick={() => onSelect?.(key)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition border ${
                active
                  ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white'
                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-800 border-transparent'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{key}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
