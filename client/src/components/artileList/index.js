import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import ArticleItem from "./ArticleItem";
import useHttpHook from "../../hooks/useHttpHook";
import EmptyArticles from "./emptyArticles";
export default function ArticleList({handleClickArticle,timeline,readedList}) {

  // const [timeline, timelineLoading] = useHttpHook({
  //   url: '/rss/timeline'
  // });

  useEffect(() => {
  }, [readedList]);

  console.log(timeline);

  return (
    <div className={"ArticleList"}>
      {timeline!=null &&(((timeline?.length)||0) === 0) &&
      <EmptyArticles/>
      }
      {(((timeline?.length)||0) > 0) &&
        <div className={"articles"}>
          {(timeline || []).map((item) => {
            const filtered=readedList.filter((v) => {
              return v.rss===item.rss&&v.guid===item.guid;
            });
            return <ArticleItem
              key={item?.rss + " " + item?.guid} article={item} handleClickArticle={handleClickArticle}
              readed={filtered.length!==0}
            />;
          })}
        </div>
      }
    </div>
  )
}
