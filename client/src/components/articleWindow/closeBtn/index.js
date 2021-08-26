import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function CloseBtn({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"CloseBtn"}>
      <img   src={require('../../../assets/ant-design_close-outlined.svg')}/>
    </div>
  )
}
