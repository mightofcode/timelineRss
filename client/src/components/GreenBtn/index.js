import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function GreenBtn({text,handleClick}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"GreenBtn"} onClick={handleClick}>
      {text}
    </div>
  )
}
