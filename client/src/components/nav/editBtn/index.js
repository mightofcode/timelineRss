import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import { Tooltip } from 'antd';
//
import { useStoreHook } from 'think-react-store';
export default function EditBtn({setContentType}) {
  const { page: { page, setPage } } = useStoreHook();
  useEffect(() => {

  }, []);

  return (
    <div className={"EditBtn"} onClick={()=>{
      //history.push("/add");
      setPage("edit");
    }}>
      <Tooltip placement="right" title={"编辑RSS"}>
        <img   src={require('../../../assets/edit.svg')}/>
      </Tooltip>

    </div>
  )
}
