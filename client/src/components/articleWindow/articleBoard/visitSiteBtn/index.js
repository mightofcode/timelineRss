import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function VisitSiteBtn({handleClick}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"VisitSiteBtn"} onClick={handleClick}>
      <div>访问原文</div>

    </div>
  )
}
