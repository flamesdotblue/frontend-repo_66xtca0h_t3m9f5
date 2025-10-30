import React from 'react';
import { Search, Upload, Bell, User } from 'lucide-react';

const Header = ({ query, onChange, onSubmit }) => {
  return (
    <header className="sticky top-0 z-20 bg-white/70 dark:bg-neutral-900/70 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
          <span className="font-semibold tracking-tight text-lg">Streamly</span>
        </div>

        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit?.();
          }}
          className="flex-1 flex items-center"
        >
          <div className="w-full max-w-2xl mx-auto flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                value={query}
                onChange={(e) => onChange?.(e.target.value)}
                aria-label="Search videos"
                placeholder="Search videos, channels, topics"
                className="w-full pl-9 pr-3 py-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-sm outline-none focus:ring-2 focus:ring-sky-400/40 border border-transparent focus:border-neutral-300 dark:focus:border-neutral-700"
              />
            </div>
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition">
            <Upload className="h-4 w-4" />
            <span className="text-sm font-medium">Upload</span>
          </button>
          <button className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-1.5 rounded-full bg-neutral-200 dark:bg-neutral-700">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
