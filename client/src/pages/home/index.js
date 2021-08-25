import React, { useState, useEffect } from 'react';
import { useHttpHook } from '@/hooks';
import { ErrorBoundary } from '@/components';

import './index.less';




export default function (props) {

  useEffect(() => {

  }, [])

  console.log("home")
  return (
    <ErrorBoundary>
      <div className='home'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </ErrorBoundary>
  )
}
