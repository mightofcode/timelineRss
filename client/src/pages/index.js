import React, {useState, useEffect} from 'react';
import {useHttpHook} from '@/hooks';
import {ErrorBoundary} from '@/components';

import './index.less';
import Nav from "../components/nav";
import RssList from "../components/rssList";
import Tooltip from "../components/tooltip";
import Tooltip1 from "../components/Tooltip1";
import ArticleList from "../components/artileList";
import ArticleWindow from "../components/articleWindow";
import {Http} from "../utils";

export default function Home(props) {

  useEffect(() => {

  }, [])

  console.log("home")

  const [showArticle, setShowArticle] = useState(false);

  const [showArticleData, setShowArticleData] = useState({});

  const handleClose = () => {
    setShowArticle(false);
    Http({url:"/rss/read",body:{guid:showArticleData?.guid,
        rss:showArticleData?.rss,}});
  };
  const handleClickArticle=(article)=>{
    setShowArticle(true);
    setShowArticleData(article);
  };

  return (
    <ErrorBoundary>
      <div className='home'>
        <Nav/>
        <RssList/>
        <ArticleList handleClickArticle={handleClickArticle}/>
        {showArticle && <ArticleWindow handleClose={handleClose}  article={showArticleData}/>}
      </div>
    </ErrorBoundary>
  )
}
