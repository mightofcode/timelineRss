import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import Tooltip1 from "../../Tooltip1";
export default function NightBtn({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"NightBtn"}>
      <Tooltip1 content="夜间模式" direction="right">
        <img src={require('../../../assets/fontisto_night-clear.svg')}/>
      </Tooltip1>
    </div>
  )
}
