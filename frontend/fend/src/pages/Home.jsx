import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import CardLarge from '../components/CardLarge/CardLarge';
import CardSmall from '../components/CardSmall/CardSmall';
import Footer from '../components/Footer/Footer';


const Home = () => {
  // Sample data
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
    <div>
       <Navbar /> 
      <Hero />

      {/* New & Trendy */}
      <div className="container">
        <SectionHeading title="New & Trendy" />
        <div className="large-card-grid">
          {largeCardsData.map((card, idx) => (
            <CardLarge key={idx} {...card} />
          ))}
        </div>
      </div>

      {/* Now Trending */}
      <div className="container">
        <SectionHeading title="Now Trending" />
        <div className="small-card-grid">
          {smallCardsData.map((card, idx) => (
            <CardSmall key={idx} {...card} />
          ))}
        </div>
      </div>

      {/* Short Reads */}
      <div className="container">
        <SectionHeading title="Short Reads" />
        <div className="short-reads">
          {/* horizontal scroll or just inline-block */}
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
      <div className="container">
        <SectionHeading title="Blog" />
        {/* Potential tab filters here: "comedy", "fantasy", "drama", etc. */}
        <div className="blog-layout">
          {/* Left side: large feature */}
          <div className="blog-feature">
            <CardLarge
              image="https://via.placeholder.com/600x400"
              category="Fantasy"
              date="1 Month Ago"
              title="Attack on Titan"
              excerpt="A featured snippet..."
            />
          </div>
          {/* Right side: smaller posts list */}
          <div className="blog-sidebar">
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

      <Footer />
    </div>
  );
};

export default Home;
