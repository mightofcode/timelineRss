import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import ImportBtn from "./importBtn";
import NightBtn from "./nightBtn";
import Tooltip1 from "../Tooltip1";
export default function Nav({}) {

  useEffect(() => {

  }, []);

  console.log("home")
  return (
    <div className={"nav"}>
      <div className={"homeIcon"} onClick={()=>{history.push("/")}}>
        <Tooltip1 content="TimelineRSS" direction="right">
          <img src={require('../../assets/mdi_rss-box.svg')}/>
        </Tooltip1>
      </div>
      <ImportBtn/>
      {/*<NightBtn/>*/}
    </div>
  )
}
