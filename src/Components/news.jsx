import React, { useState } from 'react';
import "./newsCard.css";

const News = ({ title, content, src, url, site, author, publishedAt, onBookmark, isBookmarked }) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
    onBookmark({ title, content, src, url, site, author, publishedAt }, !bookmarked);
  };

  if (!src) {
    src = `https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg`;
  }

  return (
    <div id="Card" className="card mb-3 d-inline-block mx-3 my-3" style={{ maxWidth: "330px", borderRadius: "10px", overflow: "hidden", height: "auto", position: 'relative' }}>
      <img src={src} className="card-img-top" alt="image" style={{ height: "200px", objectFit: "cover" }} />
      <button
        className={`bookmark-btn ${bookmarked ? 'bookmarked' : ''}`}
        onClick={handleBookmarkClick}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent grey
          borderRadius: '5px', // Rounded corners
          padding: '5px', // Add some padding
          border: 'none',
          cursor: 'pointer',
          zIndex: 2, // Ensure button is above the image
        }}
      >
        {bookmarked ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gold" viewBox="0 0 24 24">
            <path d="M17 3H7a2 2 0 0 0-2 2v16l7-4 7 4V5a2 2 0 0 0-2-2zm0 2v14l-5-3-5 3V5h10z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M17 3H7a2 2 0 0 0-2 2v16l7-4 7 4V5a2 2 0 0 0-2-2zm0 2v14l-5-3-5 3V5h10z" />
          </svg>
        )}
      </button>
      <div className="card-body bg-dark text-light" style={{ padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "300px" }}>
        <div>
          <div className="info" style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <p className="m-0">{site.slice(0, 20)}</p>
            <p className="m-0">⌚ {publishedAt.slice(0, 10)}</p>
          </div>
          <h5 className="card-title" style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
            {title.length > 70 ? title.slice(0, 70) + "..." : title}
          </h5>
          <p className="card-text" style={{ marginBottom: "15px" }}>
            {content ? content.slice(0, 90) + "..." : "Sorry no content. Please click the read more button below to know more about the article."}
          </p>
          <p className="text" style={{ fontSize: "0.9rem", marginBottom: "15px" }}>
            by {author ? author.slice(0, 20) : "Anonymous"}
          </p>
        </div>
        <a href={url} className="btn btn-primary" style={{ width: "100%" }}>Read More</a>
      </div>
    </div>
  );
};

export default News;
