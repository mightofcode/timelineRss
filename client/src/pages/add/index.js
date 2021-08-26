import React, {useState, useEffect} from 'react';
import {useHttpHook} from '@/hooks';
import {ErrorBoundary} from '@/components';

import './index.less';
import Nav from "../../components/nav";
import RssList from "../../components/rssList";
import ArticleList from "../../components/artileList";
import AddRssPanel from "./addRssPanel";

export default function Add(props) {

  useEffect(() => {

  }, [])



  return (
    <ErrorBoundary>
      <div className='addPage'>
        <Nav/>
        <RssList/>
        <AddRssPanel/>
      </div>
    </ErrorBoundary>
  )
}
