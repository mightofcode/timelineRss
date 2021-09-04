import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';

export default function GreenBtn({text, handleClick, style}) {

  useEffect(() => {

  }, []);

  return (
    <button className={"GreenBtn"} onClick={handleClick} style={style}>
      {text}
    </button>
  )
}
