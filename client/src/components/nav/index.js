import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function Nav({}) {

  useEffect(() => {

  }, []);

  console.log("home")
  return (
    <div className={"nav"}>
      <div className={"homeIcon"} onClick={()=>{history.push("/")}}>
        <img src={require('../../assets/mdi_rss-box.svg')}/>
      </div>
    </div>
  )
}
