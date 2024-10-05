import React from 'react'
 const News = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 px-2 my-3 py-2" style={{maxWidth:"330px",minHeight:"390px"}}>
    <img src={src?src:`https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg`} style={{height:"200px",width:"314px"}} className="card-img-top" alt="image"/>
    <div className="card-body">
      <h5 className="card-title">{title.length>70?title.slice(0,70)+"...":title}</h5>
      <p className="card-text">{description?description.slice(0,90)+"...":"Sorry no description please click the read more button below to know more about the article"}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}
export default News;