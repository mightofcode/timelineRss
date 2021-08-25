import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function ImportBtn({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"ImportBtn"}>
      <img src={require('../../../assets/ant-design_plus-outlined.svg')}/>
    </div>
  )
}
