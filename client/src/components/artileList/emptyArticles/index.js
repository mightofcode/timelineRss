import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';
import {useStoreHook} from "think-react-store";
export default function EmptyArticles({}) {

  const { page: { page, setPage } } = useStoreHook();
  useEffect(() => {

  }, []);

  return (
    <div className={"EmptyArticles"}>
      <div className={"wrappper"}>
        <img src={require('../../../assets/empty.svg')}/>
        <p onClick={()=>{setPage("add");}}>添加RSS</p>
      </div>
    </div>
  )
}
