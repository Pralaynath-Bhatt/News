import { useEffect, useState } from "react";
import React from 'react';
import News from "./news"


 const Content = ({category}) => {

  const [articles,setArticles] = useState([]);

  useEffect(() => {
    let url =`https://newsapi.org/v2/top-headlines?q=trump&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then( data => setArticles(data.articles));

 },[category])
    
      
  return (
    <div>
    <h1 className="text-center">Latest<span className="badge bg-danger">News</span></h1>
    {articles.map((news,index)=>{
      return <News key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    })}
    </div>
  )
}
export default Content;