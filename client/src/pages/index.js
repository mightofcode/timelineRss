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
import RightClickMenu from "../components/rightClickMenu";
import AddRssPanel from "./add/addRssPanel";

export default function Home(props) {

  useEffect(() => {

  }, [])

  const [rssList, setRssList] = useState([]);


  //articles,add
  const [contentType, setContentType] = useState("articles");

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

  const handleRssAdded = async () => {
    await updateRssList();
  };

  return (
    <ErrorBoundary>
      <div className='home'>
        <Nav setContentType={setContentType}/>
        <RssList rssList={rssList} handleRssRemoved={updateRssList}/>
        {contentType === "articles" &&
        <ArticleList handleClickArticle={handleClickArticle} timeline={timeline} readedList={readedList}/>}
        {contentType === "articles" && showArticleWindow && <ArticleWindow handleClose={handleClose} article={showArticleData} active={showArticle}/>}

        {contentType === "add" &&
        <AddRssPanel handleRssAdded={handleRssAdded}/>}
      </div>
    </ErrorBoundary>
  )
}
