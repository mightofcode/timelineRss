import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';
import RightClickMenu from "../../rightClickMenu";
import {Http} from "../../../utils";

export default function RssItem({rss,handleRssRemoved}) {

  useEffect(() => {

  }, []);
  const [showMenu, setShowMenu] = useState(false);
  let shortTitle = rss?.name || "";
  if (shortTitle.length > 13) {
    shortTitle = shortTitle.substring(0, 11) + "...";
  }

  const handleDeleteClick = async () => {
    const  ok=window.confirm(`确认删除 ${rss?.name} ?`);
    if (ok) {
      await Http({
        url: "/rss/remove", body: {
          rss: rss?.url,
        }
      });
      await handleRssRemoved();
    }
  };

  return (
    <div className={"RssItemWrapper"}>
      {showMenu && <RightClickMenu setShowMenu={setShowMenu} handleDeleteClick={handleDeleteClick}/>}
      <div className={"RssItem"} onContextMenu={(e) => {
        e.preventDefault();
        setShowMenu(true);
        return false;
      }}>
        <img className={"rssIcon"} src={rss?.icon}/>
        <div className={"title"}>{shortTitle}</div>

        {/*<div className={"count"} >180</div>*/}
      </div>
    </div>

  )
}
