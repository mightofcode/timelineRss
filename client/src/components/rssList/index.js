import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import RssItem from "./rssItem";
import useHttpHook from "../../hooks/useHttpHook";
import RightClickMenu from "../rightClickMenu";
export default function RssList({rssList,handleRssRemoved}) {

  useEffect(() => {

  }, []);




  return (
    <div className={"RssList"} onContextMenu={(e)=>{
      e.preventDefault();
      return false;}}>
      {(rssList || []).map((item,index) => (
            <RssItem key={item?.url || ""} rss={item} handleRssRemoved={handleRssRemoved}/>
        )
      )}
    </div>
  )
}
