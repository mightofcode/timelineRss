import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';
import Input from "../../Input";
import GreenBtn from "../../GreenBtn";
import RedBtn from "../../RedBtn";
import useHttpHook from "../../../hooks/useHttpHook";
import EditRow from "../editRow";

import { useStoreHook } from 'think-react-store';

export default function EditContent({}) {

  const { rssList: { rssList, setRsslist, getRssListAsync} } = useStoreHook();
  useEffect(() => {
    getRssListAsync();
  }, []);
  return (
    <div className={"EditContent"}>
      <div className={"title"}>编辑RSS</div>
      {rssList!=null &&
      <div className={"tableWrapper"}>
        <table>
          <colgroup>
            <col span="1" style={{width: "19%"}}/>
            <col span="1" style={{width: "7.5%"}}/>
            <col span="1" style={{width: "33%"}}/>
            <col span="1" style={{width: "16%"}}/>
            <col span="1" style={{width: "7%"}}/>
          </colgroup>
          <thead>
          <tr className={"trHead"}>
            <th>RSS源</th>
            <th>未读</th>
            <th>URL</th>
            <th>采样率</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {(rssList || []).map((item) => (
            <EditRow item={item} key={item?.url}/>
          ))}
          </tbody>
        </table>
      </div>
      }
    </div>
  )
}
