import React, {useState, useEffect} from 'react';
import {useHttpHook} from '@/hooks';
import {ErrorBoundary} from '@/components';

import './index.less';
import Nav from "../../components/nav";
import RssList from "../../components/rssList";
import ArticleList from "../../components/artileList";
import AddRssPanel from "./addRssPanel";
import {Http} from "../../utils";

export default function Add(props) {

  const [rssList, setRssList] = useState([]);
  const updateRssList = async () => {
    const res=await Http({
      url: "/rss/list", body: {
      }
    });
    console.log(res)
    setRssList(res?.rss||[]);
  };
  useEffect(() => {
    const func = async () => {
      const res=await Http({
        url: "/rss/list", body: {
        }
      });
      console.log(res)
      setRssList(res?.rss||[]);
    };
    updateRssList();
  }, []);

  //
  // const [rssList, rssListLoading] = useHttpHook({
  //   url: '/rss/list'
  // });

  const handleRssAdded = async () => {
    await updateRssList();
  };

  return (
    <ErrorBoundary>
      <div className='addPage'>
        <Nav/>
        <RssList rssList={rssList} handleRssRemoved={updateRssList}/>
        <AddRssPanel handleRssAdded={handleRssAdded}/>
      </div>
    </ErrorBoundary>
  )
}
