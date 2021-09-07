import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import { useStoreHook } from 'think-react-store';
import { Tooltip } from 'antd';

export default function ImportBtn({setContentType}) {
  const { page: { page, setPage } } = useStoreHook();
  useEffect(() => {

  }, []);

  return (
    <div className={"ImportBtn"} onClick={()=>{
      //history.push("/add");
      setPage("add");
    }}>
      <Tooltip placement="right" title={"添加RSS"}>
        <img src={require('../../../assets/ant-design_plus-outlined.svg')}/>
      </Tooltip>
    </div>
  )
}
