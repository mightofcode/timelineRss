import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';
import GreenBtn from "../../../../components/GreenBtn";
import Input from "../../../../components/Input";

export default function AddRssContent({}) {

  useEffect(() => {

  }, []);

  const [errors, setErrors] = useState();
  const [formData, setFromData] = useState({
    rss: null,
  });

  const handleChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
    setErrors(null);
  };
  const handleClick = (e) => {
    console.log(e)
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className={"AddRssContent"}>
      <form className={"addRssForm"} onSubmit={handleSubmit}>
        <div className={"addRss"}>添加RSS源</div>
        <div className={"rssInput"}>
          <Input
            style={{height:"59px","font-size":"18px","line-height":1.5,color: "#9E9E9E"}}
            placeholder={""}
            type={"text"}
            name={"rss"}
            onChange={handleChange}
            value={formData?.rss}
            error={errors?.data?.token}
          />
        </div>
        <div className={"addRssBtn"}><GreenBtn text={"ADD"} handleClick={handleClick}/></div>
      </form>


    </div>
  )
}
