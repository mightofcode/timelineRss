import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';
import GreenBtn from "../../../../components/GreenBtn";
import Input from "../../../../components/Input";
import {Http} from "../../../../utils";
import { Toast } from 'antd-mobile';
export default function AddRssContent({handleRssAdded}) {
  useEffect(() => {

  }, []);

  const [errors, setErrors] = useState();
  const [formData, setFromData] = useState({
    rss: null,
  });

  const handleChange = (e) => {
    setFromData({...formData, [e.target.name]: e.target.value});
    setErrors(null);
  };
  const handleClick = (e) => {
    console.log(e)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");
    await Http({
      url: "/rss/add", body: {
        rss: formData?.rss,
      }
    });
    Toast.success("添加成功",0.7);
    if (handleRssAdded) {
      await handleRssAdded();
    }
  };

  return (
    <div className={"AddRssContent"}>
      <form className={"addRssForm"} onSubmit={handleSubmit}>
        <div className={"addRss"}>添加RSS源</div>
        <div className={"rssInput"}>

        </div><Input
        style={{height: "59px", fontSize: "18px", lineHeight: 1.5, color: "#9E9E9E"}}
        placeholder={""}
        type={"text"}
        name={"rss"}
        onChange={handleChange}
        value={formData?.rss}
        error={errors?.data?.token}
      />
        <div className={"addRssBtn"}><GreenBtn text={"ADD"} handleClick={handleClick}/></div>
      </form>
    </div>
  )
}
