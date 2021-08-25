import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function RssItem({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"RssItem"}>
      <img className={"rssIcon"} src={require('../../../assets/emojione-monotone_newspaper.svg')}/>
      <div className={"title"}>新华社-</div>
      <div className={"count"}>180</div>
    </div>
  )
}
