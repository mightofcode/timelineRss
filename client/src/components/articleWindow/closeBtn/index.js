import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function CloseBtn({handleClose}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"CloseBtn"} onClick={handleClose}>
      <img   src={require('../../../assets/ant-design_close-outlined.svg')}/>
    </div>
  )
}
