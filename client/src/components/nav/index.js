import React, {useState, useEffect} from 'react';
import { useStoreHook } from 'think-react-store';
import './index.less';
import { history } from 'umi';
import ImportBtn from "./importBtn";
import NightBtn from "./nightBtn";
import Tooltip1 from "../Tooltip1";
import EditBtn from "./editBtn";
export default function Nav({}) {

  const { page: { page, setPage } } = useStoreHook();

  useEffect(() => {

  }, []);

  return (
    <div className={"nav"}>
      <div className={"homeIcon"} onClick={()=>{
        //history.push("/");
        setPage("articles");
      }}>
        <Tooltip1 content="TimelineRSS" direction="right">
          <img src={require('../../assets/mdi_rss-box.svg')}/>
        </Tooltip1>
      </div>
      <ImportBtn />
      <EditBtn />
      {/*<NightBtn/>*/}
    </div>
  )
}
