import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';

const sampleVideos = [
  {
    id: '1',
    title: 'Calm Coding Beats • Focus Music for Deep Work',
    channel: 'LoFi Station',
    views: '1.2M',
    time: '3 days ago',
    duration: '2:34:21',
    category: 'For You',
    thumbnail:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Design a Minimal Landing Page in 30 Minutes',
    channel: 'PixelCraft',
    views: '456K',
    time: '1 week ago',
    duration: '29:45',
    category: 'Explore',
    thumbnail:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    title: '10 Tiny Habits That Changed My Life',
    channel: 'Mindset Daily',
    views: '2.1M',
    time: '2 weeks ago',
    duration: '18:06',
    category: 'For You',
    thumbnail:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'The Future of JavaScript: What to Learn Next',
    channel: 'Code Frontier',
    views: '879K',
    time: '5 days ago',
    duration: '22:18',
    category: 'Explore',
    thumbnail:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Street Photography in Tokyo at Night',
    channel: 'Lens & Light',
    views: '640K',
    time: '3 weeks ago',
    duration: '13:27',
    category: 'For You',
    thumbnail:
      'https://images.unsplash.com/photo-1491884662610-dfcd28f30cf5?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Build a Personal Finance Tracker (React + Tailwind)',
    channel: 'Dev Kitchen',
    views: '98K',
    time: '4 days ago',
    duration: '41:03',
    category: 'Explore',
    thumbnail:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Morning Yoga Flow for Beginners',
    channel: 'Move with Aya',
    views: '1.9M',
    time: '1 month ago',
    duration: '24:10',
    category: 'For You',
    thumbnail:
      'https://images.unsplash.com/photo-1526401485004-2fda9f4e04f5?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'How I Edit Cinematic Travel Videos',
    channel: 'Roam Films',
    views: '312K',
    time: '6 days ago',
    duration: '16:55',
    category: 'Explore',
    thumbnail:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '9',
    title: 'Make Better Coffee at Home: Barista Tips',
    channel: 'Daily Brew',
    views: '220K',
    time: '2 months ago',
    duration: '9:48',
    category: 'For You',
    thumbnail:
      'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '10',
    title: 'Top 10 VSCode Extensions for Productivity',
    channel: 'Dev Kitchen',
    views: '540K',
    time: '2 weeks ago',
    duration: '12:31',
    category: 'Explore',
    thumbnail:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '11',
    title: 'Minimal Apartment Makeover on a Budget',
    channel: 'Home Kind',
    views: '780K',
    time: '4 months ago',
    duration: '14:22',
    category: 'For You',
    thumbnail:
      'https://images.unsplash.com/photo-1505691723518-36a5ac3b2c5c?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '12',
    title: 'Understanding AI Agents in Plain English',
    channel: 'Tech Brief',
    views: '1.4M',
    time: '5 days ago',
    duration: '19:02',
    category: 'Explore',
    thumbnail:
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&auto=format&fit=crop',
  },
];

function App() {
  const [selected, setSelected] = useState('For You');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    let list = sampleVideos;
    if (selected && selected !== 'For You') {
      list = list.filter((v) => v.category === selected);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (v) => v.title.toLowerCase().includes(q) || v.channel.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selected, query]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Header query={query} onChange={setQuery} onSubmit={() => {}} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar selected={selected} onSelect={setSelected} />
          <main className="flex-1 py-6">
            {/* Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 pr-2">
              {['All', 'Design', 'Coding', 'Lifestyle', 'Tech', 'Productivity', 'Travel', 'Music'].map(
                (tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm whitespace-nowrap"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>

            {/* Section title */}
            <div className="flex items-center justify-between mt-4 mb-3">
              <h2 className="text-lg font-semibold tracking-tight">
                {selected === 'For You' ? 'Recommended' : selected}
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {filtered.length} {filtered.length === 1 ? 'video' : 'videos'}
              </p>
            </div>

            <VideoGrid videos={filtered} />
          </main>
        </div>
      </div>
      <footer className="py-10 text-center text-sm text-neutral-500 dark:text-neutral-400">
        Built with love as a clean, distraction-free alternative to YouTube.
      </footer>
    </div>
  );
}

export default App;
