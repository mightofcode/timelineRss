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

  const [rssList, setRssList] = useState([]);
  const updateRssList = async () => {
    const res=await Http({
      url: "/rss/list", body: {
      }
    });
    console.log(res)
    setRssList(res?.rss||[]);
  };
  useEffect(() => {
    const func = async () => {
      const res=await Http({
        url: "/rss/list", body: {
        }
      });
      console.log(res)
      setRssList(res?.rss||[]);
    };
    updateRssList();
  }, [])

  const [showArticle, setShowArticle] = useState(false);

  const [showArticleData, setShowArticleData] = useState({});

  const [showArticleWindow, setShowArticleWindow] = useState(false);

  const [readedList, setReadedList] = useState([]);

  const handleClose = async () => {
    setShowArticle(false);
    await Http({
      url: "/rss/read", body: {
        guid: showArticleData?.guid,
        rss: showArticleData?.rss,
      }
    });
    readedList.push(showArticleData);
    setReadedList(readedList.slice());

  };
  const handleClickArticle = (article) => {
    setShowArticle(true);
    setShowArticleWindow(true);
    setShowArticleData(article);
  };

  const [timeline, timelineLoading] = useHttpHook({
    url: '/rss/timeline'
  });


  return (
    <ErrorBoundary>
      <div className='home'>
        <Nav/>
        <RssList rssList={rssList}/>
        <ArticleList handleClickArticle={handleClickArticle} timeline={timeline} readedList={readedList}/>
        {showArticleWindow && <ArticleWindow handleClose={handleClose} article={showArticleData} active={showArticle}/>}
      </div>
    </ErrorBoundary>
  )
}
