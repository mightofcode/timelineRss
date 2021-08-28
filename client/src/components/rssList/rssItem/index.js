import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function RssItem({rss}) {

  useEffect(() => {

  }, []);

  let shortTitle=rss?.name||"";
  if(shortTitle.length>13){
    shortTitle=shortTitle.substring(0,11)+"...";
  }


  return (
    <div className={"RssItem"}>
      <img className={"rssIcon"} src={rss?.icon}/>
      <div className={"title"}>{shortTitle}</div>
      {/*<div className={"count"} >180</div>*/}
    </div>
  )
}
