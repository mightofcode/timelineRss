import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import ImportBtn from "./importBtn";
import NightBtn from "./nightBtn";
export default function Nav({}) {

  useEffect(() => {

  }, []);

  console.log("home")
  return (
    <div className={"nav"}>
      <div className={"homeIcon"} onClick={()=>{history.push("/")}}>
        <img src={require('../../assets/mdi_rss-box.svg')}/>
      </div>
      <ImportBtn/>
      <NightBtn/>
    </div>
  )
}
