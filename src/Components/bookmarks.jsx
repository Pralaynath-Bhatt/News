import React, { useEffect, useState } from 'react';
import News from './news'; // Import the News component

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Load bookmarks from local storage
    const savedBookmarks = localStorage.getItem('bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  return (
    <div>
      <h1 className="text-center">Bookmarked Articles</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {bookmarks.length > 0 ? (
          bookmarks.map((news, index) => (
            <News 
              key={index}
              title={news.title}
              content={news.content}
              src={news.src}
              url={news.url}
              site={news.site}
              author={news.author}
              publishedAt={news.publishedAt}
              isBookmarked={true}
              onBookmark={() => {}} // No action needed here
            />
          ))
        ) : (
          <p>No bookmarked articles found.</p>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
