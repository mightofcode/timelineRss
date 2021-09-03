import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';
import ArticleBoard from "./articleBoard";
import CloseBtn from "./closeBtn";

export default function ArticleWindow({handleClose, article,active=false}) {

  useEffect(() => {

  }, []);

  useEffect(()=>{
    return ()=>{
    }
  });

  const className=active?"ArticleWindowShow":"ArticleWindowHide";


  return (
    <div className={"ArticleWindow "+className} onClick={(e) => {
      e.preventDefault();
      if (e.target === e.currentTarget) {
        handleClose();
      }
    }}>
      <CloseBtn handleClose={handleClose}/>
      <ArticleBoard article={article}/>
    </div>
  )
}
