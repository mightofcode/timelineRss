import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';
import ArticleBoard from "./articleBoard";
import CloseBtn from "./closeBtn";

export default function ArticleWindow({handleClose, article}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"ArticleWindow"} onClick={(e) => {
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
