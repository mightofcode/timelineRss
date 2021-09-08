import React, {useState, useEffect} from 'react';
import {useHttpHook} from '@/hooks';
import {ErrorBoundary} from '@/components';
import { useStoreHook } from 'think-react-store';

import './index.less';
import Nav from "../components/nav";
import RssList from "../components/rssList";
import ArticleList from "../components/artileList";
import ArticleWindow from "../components/articleWindow";
import {Http} from "../utils";
import RightClickMenu from "../components/rightClickMenu";
import AddRssPanel from "./add/addRssPanel";
import EditPanel from "../components/editPanel";


export default function Home(props) {

  const { hello: { text, getUser, getUserAsync } } = useStoreHook();

  const { page: { page, showArticle,setShowArticle,showArticleWindow, setShowArticleWindow,setPage } } = useStoreHook();

  const { timeline: { articles, setArticles, getArticlesAsync} } = useStoreHook();

  // useEffect(() => {
  //   getUserAsync({});
  // }, [])


  useEffect(() => {
    getArticlesAsync();
  }, [])

  // useEffect(() => {
  //   console.log("articles");
  // }, [articles])

  const [showArticleData, setShowArticleData] = useState({});
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

  //
  // const [timeline, timelineLoading] = useHttpHook({
  //   url: '/rss/timeline'
  // });
  //
  // const handleRssAdded = async () => {
  //   await updateRssList();
  // };

  return (
    <ErrorBoundary>
      <div className='home'>
        <Nav />
        {/*<RssList rssList={rssList} handleRssRemoved={updateRssList}/>*/}
        {page === "articles" && <ArticleList handleClickArticle={handleClickArticle} timeline={articles} readedList={readedList}/>}
        {page === "articles" && showArticleWindow && <ArticleWindow handleClose={handleClose} article={showArticleData} active={showArticle}/>}
        {page === "add" && <AddRssPanel />}
        {page === "edit" && <EditPanel/>}
      </div>
    </ErrorBoundary>
  )
}
