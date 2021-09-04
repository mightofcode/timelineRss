import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import ArticleItem from "./ArticleItem";
import useHttpHook from "../../hooks/useHttpHook";
export default function ArticleList({handleClickArticle,timeline,readedList}) {

  // const [timeline, timelineLoading] = useHttpHook({
  //   url: '/rss/timeline'
  // });

  useEffect(() => {
  }, [readedList]);


  return (
    <div className={"ArticleList"}>
      <div className={"articles"}>
        {(timeline?.articles || []).map((item) => {
          const filtered=readedList.filter((v) => {
            return v.rss===item.rss&&v.guid===item.guid;
          });
          return <ArticleItem
            key={item?.rss + " " + item?.guid} article={item} handleClickArticle={handleClickArticle}
            readed={filtered.length!==0}
          />;
        })}
      </div>
    </div>
  )
}
