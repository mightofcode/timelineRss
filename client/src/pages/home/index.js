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

      </div>
    </ErrorBoundary>
  )
}
