import React, {useState, useEffect} from 'react';

import './index.less';
import { history } from 'umi';
import Input from "../../Input";
import GreenBtn from "../../GreenBtn";
import RedBtn from "../../RedBtn";
import {Http} from "../../../utils";
import { Toast } from 'antd-mobile';
import { useStoreHook } from 'think-react-store';
export default function EditRow({item}) {

  useEffect(() => {

  }, []);

  const { rssList: { rssList, setRsslist, getRssListAsync} } = useStoreHook();


  const [formData, setFromData] = useState({
    rss: item?.url,
    sample: item?.sample || 1.0,
  });

  const [errors, setErrors] = useState(null);

  const handleChange=(e)=>{
    setFromData({ ...formData, [e.target.name]: e.target.value });
    setErrors(null);
  };

  const handleCommit=async (e)=>{
    const res=await Http({
      url: "/rss/edit", body: {
        ...formData
      }
    });
    console.log(res);
    Toast.success("修改成功",0.7);
    await getRssListAsync();
  };
  const handleDelete=async (e)=>{
    const res=await Http({
      url: "/rss/remove", body: {
        ...formData
      }
    });
    console.log(res);
    Toast.success("删除成功",0.7);
    await getRssListAsync();
  };


  return (
    <tr key={item?.url}>
      <td className={"col1"}>{item?.name}</td>
      <td className={"col2"}>{item?.unread || 0}</td>
      {/*<td><Input*/}
      {/*  style={{height: "23px",minHeight: "23px", fontSize: "13px", lineHeight: 0, color: "#333",padding:"0px 12px"}}*/}
      {/*  placeholder={""}*/}
      {/*  type={"text"}*/}
      {/*  name={"rss"}*/}
      {/*  onChange={null}*/}
      {/*  value={"https://www.zhihu.com/"}*/}
      {/*  error={null}*/}
      {/*/></td>*/}
      <td className={"col3"}>{formData?.rss}</td>
      <td><Input
        style={{height: "23px",minHeight: "23px", fontSize: "13px", lineHeight: 0, color: "#333",padding:"0px 12px"}}
        placeholder={""}
        type={"text"}
        name={"sample"}
        onChange={handleChange}
        value={formData?.sample||1.0}
        error={null}
      /></td>
      <td>
        <div className={"ops"}>
          <GreenBtn text={"OK"} style={{padding:"4px 10px",fontSize:"12px",fontWeight:"500px",width:"60px",height:"23px"}} handleClick={handleCommit}/>
          <RedBtn text={"DELETE"} style={{padding:"4px 10px",fontSize:"12px",fontWeight:"500px",width:"60px",height:"23px"}} handleClick={handleDelete}/>
        </div>
      </td>
    </tr>
  )
}
