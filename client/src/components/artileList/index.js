import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import ArticleItem from "./ArticleItem";
export default function ArticleList({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"ArticleList"}>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
      <ArticleItem/>
    </div>
  )
}
