import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import RssItem from "./rssItem";
import useHttpHook from "../../hooks/useHttpHook";
export default function RssList({rssList}) {

  //

  useEffect(() => {

  }, []);


  return (
    <div className={"RssList"} >
      {(rssList || []).map((item) => (
        <RssItem key={item?.url || ""} rss={item}/>
      ))}
    </div>
  )
}
