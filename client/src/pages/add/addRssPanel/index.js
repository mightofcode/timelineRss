import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import AddRssContent from "./addRssContent";
export default function AddRssPanel({handleRssAdded}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"AddRssPanel"}>
      <AddRssContent handleRssAdded={handleRssAdded}/>
    </div>
  )
}
