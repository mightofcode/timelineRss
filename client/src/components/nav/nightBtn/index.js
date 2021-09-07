import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import { Tooltip } from 'antd';
export default function NightBtn({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"NightBtn"}>
      <Tooltip placement="right" title={"夜间模式"}>
        <img src={require('../../../assets/fontisto_night-clear.svg')}/>
      </Tooltip>
    </div>
  )
}
