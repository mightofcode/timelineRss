import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import Tooltip1 from "../../Tooltip1";
export default function ImportBtn({setContentType}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"ImportBtn"} onClick={()=>{
      //history.push("/add");
      setContentType("add");
    }}>
      <Tooltip1 content="添加RSS" direction="right">
        <img src={require('../../../assets/ant-design_plus-outlined.svg')}/>
      </Tooltip1>
    </div>
  )
}
