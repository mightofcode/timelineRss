import React, {useState, useEffect} from 'react';
import { useStoreHook } from 'think-react-store';
import './index.less';
import { history } from 'umi';
import ImportBtn from "./importBtn";
import NightBtn from "./nightBtn";
import EditBtn from "./editBtn";
import { Tooltip } from 'antd';



export default function Nav({}) {

  const { timeline: { articles, setArticles, getArticlesAsync} } = useStoreHook();
  const { page: { page, setPage } } = useStoreHook();

  useEffect(() => {

  }, []);

  return (
    <div className={"nav"}>
      <div className={"homeIcon"} onClick={()=>{
        //history.push("/");
        const func=async ()=>{
          await getArticlesAsync();
          await setPage("articles");
        };
        func();
      }}>
        <Tooltip placement="right" title={"TimelineRSS"}>
          <img src={require('../../assets/mdi_rss-box.svg')}/>
        </Tooltip>
      </div>
      <ImportBtn />
      <EditBtn />
      {/*<NightBtn/>*/}
    </div>
  )
}
