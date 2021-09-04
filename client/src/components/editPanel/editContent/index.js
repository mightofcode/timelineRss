import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';
import Input from "../../Input";
import GreenBtn from "../../GreenBtn";
import RedBtn from "../../RedBtn";

export default function EditContent({}) {

  useEffect(() => {

  }, []);

  return (
    <div className={"EditContent"}>
      <div className={"title"}>编辑RSS</div>
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

          <tr>
            <td className={"col1"}>路透社-深度分析</td>
            <td className={"col2"}>183</td>
            <td><Input
              style={{height: "23px",minHeight: "23px", fontSize: "13px", lineHeight: 0, color: "#333",padding:"0px 12px"}}
              placeholder={""}
              type={"text"}
              name={"rss"}
              onChange={null}
              value={"https://www.zhihu.com/"}
              error={null}
            /></td>
            <td><Input
              style={{height: "23px",minHeight: "23px", fontSize: "13px", lineHeight: 0, color: "#333",padding:"0px 12px"}}
              placeholder={""}
              type={"text"}
              name={"rss"}
              onChange={null}
              value={"1.00"}
              error={null}
            /></td>
            <td>
              <div className={"ops"}>
                <GreenBtn text={"OK"} style={{padding:"4px 10px",fontSize:"12px",fontWeight:"500px",width:"60px",height:"23px"}}/>
                <RedBtn text={"DELETE"} style={{padding:"4px 10px",fontSize:"12px",fontWeight:"500px",width:"60px",height:"23px"}}/>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
