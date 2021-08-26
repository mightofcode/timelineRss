import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function RssItem({rss}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"RssItem"}>
      <img className={"rssIcon"} src={rss?.icon}/>
      <div className={"title"}>{rss?.name}</div>
      {/*<div className={"count"} >180</div>*/}
    </div>
  )
}
