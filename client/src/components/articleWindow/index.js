import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import ArticleBoard from "./articleBoard";
import CloseBtn from "./closeBtn";
export default function ArticleWindow({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"ArticleWindow"}>
      <CloseBtn/>
      <ArticleBoard/>
    </div>
  )
}
