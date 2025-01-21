import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// If using a separate component for the ShortReads, import that as well

import './ChapterPages.css'; // Custom styles for this page (optional)

const ChapterPage = () => {
  return (
    <div className="chapter-page">
      {/* Navbar */}
      <Navbar />

      {/* Hero / Header */}
      <header
        className="chapter-hero"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1600x600')`,
        }}
      >
        <div className="chapter-hero-overlay">
          <h1>ATTACK ON THE TITANS</h1>
          <div className="chapter-stars">
            {/* If you have star icons, otherwise you can use emojis or custom icons */}
            <span>★★★★★</span>
          </div>
          <p className="chapter-reads">1 million+ reads</p>
        </div>
      </header>

      {/* Chapter Content */}
      <main className="chapter-content container">
        <h2>CHAPTER 1</h2>
        <p>
          {/* Replace with real chapter text */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus neque, elementum ullamcorper 
          hendrerit eget, s dfhs d sdfh sdk sdf s fwe fx s fg wef s df wef sd  zdfs ew er fzs df wefes fwe fsd  cz   tincidunt ut nisi. Sed magna nunc, consequat vel aliquam vitae...
        </p>
        {/* More paragraphs, or map them in from an array of paragraphs */}
        
        {/* Chapter Navigation */}
        <div className="chapter-navigation">
          <a href="#chapter2">CHAPTER 2 →</a>
        </div>
      </main>

      {/* Short Reads Section */}
      <section className="short-reads container">
        <h3>Short Reads</h3>
        <div className="short-reads-grid">
          {/* Sample items */}
          <div className="short-read-card">
            <img src="https://via.placeholder.com/150" alt="Akame ga Kill" />
            <h4>Akame Ga Kill: Season Finale</h4>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
          <div className="short-read-card">
            <img src="https://via.placeholder.com/150" alt="Naruto Uzumaki" />
            <h4>Naruto Uzumaki: Hidden Village</h4>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
          <div className="short-read-card">
            <img src="https://via.placeholder.com/150" alt="Love Juice Season Premiere" />
            <h4>Love Juice Season Premiere</h4>
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="comments container">
        <h3>COMMENTS</h3>
        {/* You can either list existing comments or a form to add new ones */}
        {/* e.g. <CommentList /> or <CommentForm /> */}
        <p>No comments yet. Start the discussion!</p>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ChapterPage;
