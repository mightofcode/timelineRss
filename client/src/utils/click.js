import {useEffect} from "react";
import dayjs from "dayjs";

export default function useOutsideClick(ref, callback){
  const handleClick = (e) => {
    //console.log(1212);
    console.log(ref.current);
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    document.addEventListener("contextmenu", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleClick);
    };
  });
}

