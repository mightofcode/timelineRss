import React, { useState, useEffect } from 'react';
import { useHttpHook } from '@/hooks';
import { ErrorBoundary } from '@/components';

import './index.less';
import Nav from "../components/nav";
import RssList from "../components/rssList";
import Tooltip from "../components/tooltip";
import Tooltip1 from "../components/Tooltip1";
import ArticleList from "../components/artileList";

export default function Home(props) {

  useEffect(() => {

  }, [])

  console.log("home")
  return (
    <ErrorBoundary>
      <div className='home'>
        <Nav />
        <RssList/>
        <ArticleList />
      </div>
    </ErrorBoundary>
  )
}
