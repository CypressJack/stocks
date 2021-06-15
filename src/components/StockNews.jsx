import React from 'react';
import "./HomePage.scss";
import icon from "../assets/stock-news/stock-news.png";
import viewArticle from "../assets/stock-news/view-article.png"

export default function StockNews(props) {

  return (
    <div className='stock-news'>
      <div className='news-container'>
        <p className='news-heading'><img src={ icon } alt='news' className='news-icon'/>Stock News 3h</p>
        <h3 className='article-heading'>Prediction: Our bears and bulls of the week</h3>
      </div>
      <div>
        <p className='view-article'>View Article<img className='view-article-icon'src={ viewArticle } alt='view-article'/></p>
      </div>
    </div>
  )
};