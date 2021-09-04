import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import Tooltip1 from "../../Tooltip1";
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
      <Tooltip1 content="编辑RSS" direction="right">
        <img   src={require('../../../assets/edit.svg')}/>
      </Tooltip1>
    </div>
  )
}
