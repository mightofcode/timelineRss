import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function RedBtn({text,handleClick,style={}}) {

  useEffect(() => {

  }, []);

  return (
    <button className={"RedBtn"} onClick={handleClick} style={style}>
      {text}
    </button>
  )
}
