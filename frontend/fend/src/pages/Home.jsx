import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import CardLarge from '../components/CardLarge/CardLarge';
import CardSmall from '../components/CardSmall/CardSmall';
import Footer from '../components/Footer/Footer';

function Home() {
  // Sample data for the large cards
  const largeCardsData = [
    {
      image: 'https://via.placeholder.com/600x400',
      category: 'Fantasy',
      date: '1 Month Ago',
      title: 'Attack on Titans',
      excerpt: 'This is a short snippet about Attack on Titans.'
    },
    {
      image: 'https://via.placeholder.com/600x400',
      category: 'Fantasy',
      date: '1 Month Ago',
      title: 'Attack on Titans',
      excerpt: 'Another card snippet.'
    },
  ];

  // Sample data for the small cards
  const smallCardsData = [
    {
      image: 'https://via.placeholder.com/80',
      title: 'Attack on Titan',
      date: '1 Month Ago',
      excerpt: 'Short description...'
    },
    {
      image: 'https://via.placeholder.com/80',
      title: 'Dr. Stone',
      date: '1 Month Ago',
      excerpt: 'Short description...'
    },
    {
      image: 'https://via.placeholder.com/80',
      title: 'Second Chance',
      date: '1 Month Ago'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navigation */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* New & Trendy */}
      <div className="max-w-screen-xl mx-auto px-4 mt-8 w-full">
        <SectionHeading title="New & Trendy" />
        {/* 2-column grid on md+ screens, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {largeCardsData.map((card, idx) => (
            <CardLarge key={idx} {...card} />
          ))}
        </div>
      </div>

      {/* Now Trending */}
      <div className="max-w-screen-xl mx-auto px-4 mt-8 w-full">
        <SectionHeading title="Now Trending" />
        {/* 3 columns on md+ screens, single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {smallCardsData.map((card, idx) => (
            <CardSmall key={idx} {...card} />
          ))}
        </div>
      </div>

      {/* Short Reads */}
      <div className="max-w-screen-xl mx-auto px-4 mt-8 w-full">
        <SectionHeading title="Short Reads" />
        {/* Horizontal scroll container: flex row + overflow-x-auto */}
        <div className="flex overflow-x-auto space-x-4 mt-4">
          {[...Array(5)].map((_, i) => (
            <CardSmall
              key={i}
              image="https://via.placeholder.com/80"
              title={`Anime #${i + 1}`}
              date="2 Weeks Ago"
            />
          ))}
        </div>
      </div>

      {/* Blog */}
      <div className="max-w-screen-xl mx-auto px-4 mt-8 mb-8 w-full">
        <SectionHeading title="Blog" />
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Left side: large feature */}
          <div className="flex-1">
            <CardLarge
              image="https://via.placeholder.com/600x400"
              category="Fantasy"
              date="1 Month Ago"
              title="Attack on Titan"
              excerpt="A featured snippet..."
            />
          </div>

          {/* Right side: smaller posts list */}
          <div className="w-full md:w-[300px]">
            {[...Array(4)].map((_, i) => (
              <CardSmall
                key={i}
                image="https://via.placeholder.com/80"
                title={`Manga #${i + 1}`}
                date="3 Days Ago"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default Home;
