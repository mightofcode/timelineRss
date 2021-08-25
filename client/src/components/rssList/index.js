import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import RssItem from "./rssItem";
export default function RssList({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"RssList"}>
      <RssItem />
      <RssItem />
      <RssItem />
    </div>
  )
}
