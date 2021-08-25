import React, { useState, useEffect } from 'react';
import { useHttpHook } from '@/hooks';
import { ErrorBoundary } from '@/components';

import './index.less';
import Nav from "../../components/nav";
import RssList from "../../components/rssList";
import Tooltip from "../../components/tooltip";
import Tooltip1 from "../../components/Tooltip1";

export default function (props) {

  useEffect(() => {

  }, [])

  console.log("home")
  return (
    <ErrorBoundary>
      <div className='home'>
        <Tooltip/>

        <Nav />
        <RssList/>
        <Tooltip1 content="Yee-haw!" direction="right">
          <span className="example-emoji" role="img" aria-label="cowboy emoji">
            1212
          </span>
        </Tooltip1>
      </div>
    </ErrorBoundary>
  )
}
