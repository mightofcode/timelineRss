import React, { useState, useEffect } from 'react';
import { useHttpHook } from '@/hooks';
import { ErrorBoundary } from '@/components';

import './index.less';
import Nav from "../../components/nav";

export default function (props) {

  useEffect(() => {

  }, [])

  console.log("home")
  return (
    <ErrorBoundary>
      <div className='home'>
        <Nav />
      </div>
    </ErrorBoundary>
  )
}
