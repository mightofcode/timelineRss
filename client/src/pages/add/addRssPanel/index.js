import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import AddRssContent from "./addRssContent";
export default function AddRssPanel({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"AddRssPanel"}>
      <AddRssContent />
    </div>
  )
}
