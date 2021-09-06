import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import EditContent from "./editContent";
export default function EditPanel({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"EditPanel"}>
      <EditContent/>
    </div>
  )
}
