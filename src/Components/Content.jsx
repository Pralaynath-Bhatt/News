import { useEffect, useState } from "react";
import React from 'react';
import News from "./news";

const Content = ({ category, country, search }) => {
  const [articles, setArticles] = useState([]);
  const [url, setUrl] = useState('');

  const empty = () => {
    setUrl(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY2}`);
  };

  const full = () => {
    setUrl(`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${import.meta.env.VITE_API_KEY2}`);
  };

  useEffect(() => {
    if (!search) {
      empty();
    } else {
      full();
    }
  }, [search, category]); // Include search and category in dependency array

  useEffect(() => {
    if (url) {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setArticles(data.articles))
        .catch(error => console.error('Fetch error:', error));
    }
  }, [url]); // Fetch data whenever URL changes

  return (
    <div>
      <h1 className="text-center">Latest<span className="badge bg-danger">News</span></h1>
      {articles.map((news, index) => {
        if (news.title !== "[Removed]") {
          return (
            <News 
              key={index} 
              title={news.title} 
              content={news.content} 
              src={news.urlToImage} 
              url={news.url} 
              site={news.source.name} 
              author={news.author} 
              publishedAt={news.publishedAt}
            />
          );
        }
        return null; // Make sure to return null if the condition fails
      })}
    </div>
  );
};

export default Content;
