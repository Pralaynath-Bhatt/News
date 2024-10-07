import { useEffect, useState } from "react";
import React from 'react';
import News from "./news"


 const Content = ({category,country,search}) => {
  const [articles,setArticles] = useState([]);
  let url
  search?url =`https://newsapi.org/v2/top-headlines?q=${search}&apiKey=${import.meta.env.VITE_API_KEY2}`:url= `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_API_KEY2}`
  
  useEffect(() => { 
    fetch(url).then(response => response.json()).then( data => setArticles(data.articles));
    
 },[category])
    
      
  return (
    <div>
    <h1 className="text-center">Latest<span className="badge bg-danger">News</span></h1>
    {articles.map((news,index)=>{
      if(news.title!="[Removed]")
      return <News key={index} title={news.title} content={news.content} src={news.urlToImage} url={news.url} site={news.source.name} author={news.author} publishedAt={news.publishedAt}/>
 })}
    </div>
  )
}
export default Content;