import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import VisitSiteBtn from "./visitSiteBtn";
import ReactDOM from 'react-dom';
const dayjs = require('dayjs');

export default function ArticleBoard({article}) {


  useEffect(() => {
    //
    //ReactDOM.findDOMNode(this).scrollLeft = 0;
  }, []);

  const date=new Date(article?.pubTime||0);
  const  meta=`${article?.name||""} | ${article?.author||"--"} | ${dayjs(date).format("YYYY-MM-DD hh-mm")}`;

  return (
    <div className={"ArticleBoard"}>
      <div className={"title"}>{article?.title}</div>
      <div className={"meta"}>{meta}</div>
      <div className={"content"} dangerouslySetInnerHTML={{__html:article?.content}}>
        </div>
      <VisitSiteBtn handleClick={()=>{
        window.open(article?.link);
      }}/>
    </div>
  )
}
