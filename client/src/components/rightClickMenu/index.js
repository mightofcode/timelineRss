import React, {useState, useEffect, useRef} from 'react';

import './index.less';
import {history} from 'umi';
import DeleteMenuBtn from "./deleteMenuBtn";
import useOutsideClick from "../../utils/click";

export default function RightClickMenu({setShowMenu,handleDeleteClick}) {

  const comRef = useRef();
  useOutsideClick(comRef, () => {
    console.log(false);
    setShowMenu(false);
  });

  useEffect(() => {

  }, []);

  return (
    <div className={"RightClickMenu"} ref={comRef}>
      <DeleteMenuBtn handleClick={handleDeleteClick}/>
    </div>
  )
}
