import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/HomeNews.css";
import "../scripts/HomeNews.js";
export const HomeNews = () => {
  const [news, setNews] = useState([]);
  const getNews = async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1.1/news");
    setNews(data);
    console.log(data);
    return data;
  };
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div className="home-news" id="light-slider">
        {news.slice(0, 4).map((homeNew) => (
          <div className="home-news-card" key={homeNew.date}>
            <div className="news-card-image">
              <a href={homeNew.url} target="_blank">
                <img src={homeNew.banner} alt="Card image cap" />
              </a>
            </div>
            <div className="news-card-body">
              <div className="body-title">{homeNew.title}</div>
              <div className="body-text">{homeNew.summary}</div>
              <a className="btn home-summoner-btn" href={homeNew.url} target="_blank">
                <i className="fas fa-book-open"></i>
                <span className="mx-2">Full article @Surrender20 </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
