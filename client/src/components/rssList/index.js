import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import RssItem from "./rssItem";
import useHttpHook from "../../hooks/useHttpHook";
export default function RssList({}) {

  //
  const [rssList, rssListLoading] = useHttpHook({
    url: '/rss/list'
  });
  useEffect(() => {

  }, []);


  return (
    <div className={"RssList"}>
      {(rssList?.rss || []).map((item) => (
        <RssItem key={item?.url || ""} rss={item}/>
      ))}
    </div>
  )
}
