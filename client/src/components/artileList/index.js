import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import ArticleItem from "./ArticleItem";
import useHttpHook from "../../hooks/useHttpHook";
export default function ArticleList({handleClickArticle}) {

  const [timeline, timelineLoading] = useHttpHook({
    url: '/rss/timeline'
  });

  useEffect(() => {

  }, []);




  return (
    <div className={"ArticleList"}>
      {(timeline?.articles || []).map((item) => (
        <ArticleItem key={item?.rss+" "+item?.guid} article={item} handleClickArticle={handleClickArticle}/>
      ))}

    </div>
  )
}
