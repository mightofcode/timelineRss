import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function NightBtn({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"NightBtn"}>
      <img src={require('../../../assets/fontisto_night-clear.svg')}/>
    </div>
  )
}
