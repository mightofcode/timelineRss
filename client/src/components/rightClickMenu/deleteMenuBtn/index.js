import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
export default function DeleteMenuBtn({handleClick}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"DeleteMenuBtn"} onClick={handleClick}>
      <img src={require('../../../assets/carbon_delete.svg')}/>
      <div>DELETE</div>
    </div>
  )
}
