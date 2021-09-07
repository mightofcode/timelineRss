import React, {useState, useEffect} from 'react';

import './index.less';
import {history} from 'umi';

export default function Input({
                                type = "text",
                                disabled = false,
                                error = null,
                                placeholder = "placeholder",
                                name,
                                onChange = (e) => {
                                },
                                value = "",
                                style = {}

                              }) {
  const [errorValue, setErrorValue] = useState(error);
  useEffect(() => {
    setErrorValue(error);
  }, [error]);
  const handleChange = (e) => {
    if(onChange)onChange(e);
    setErrorValue(null);
  };
  return (
    <div className={"Input"}>
      <input className={"input"}
             style={style}
             name={name}
             onChange={handleChange}
             type={type}
             disabled={disabled}
             error={errorValue}
             placeholder={placeholder}
             value={value || ""}
      />
      {errorValue && <div className={"error"}>{errorValue}</div>}
    </div>
  );
}
