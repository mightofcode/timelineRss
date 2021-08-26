import React, {useState, useEffect} from 'react';

import dayjs from "dayjs";
import './index.less';
import { history } from 'umi';
export default function ArticleItem({article,handleClickArticle}) {

  useEffect(() => {

  }, []);

  let shortContent=article?.content||"";
  shortContent = shortContent.replace(/<\/?[^>]+(>|$)/g, "");
  if(shortContent.length>300){
    shortContent=shortContent.substring(0,300);
  }
  const date=new Date(article?.pubTime||0);
  const  meta=`${article?.rss} | ${article?.author} | ${dayjs(date).format("YYYY-MM-DD hh-mm")}`;
  return (
    <div className={"ArticleItem"} onClick={()=>{
      handleClickArticle(article);} }>
      <div className={"title"}>{article?.title}</div>
      <div className={"meta"}>{meta}</div>
      <div className={"content"}>{shortContent}</div>
    </div>
  )
}
