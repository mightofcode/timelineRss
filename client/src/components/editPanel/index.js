import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import EditContent from "./editContent";
export default function EditPanel({}) {

  useEffect(() => {

  }, []);

  console.log("1212");
  return (
    <div className={"EditPanel"}>
      <EditContent/>
    </div>
  )
}
