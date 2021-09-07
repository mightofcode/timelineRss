import { Http } from '@/utils';
import sleep from "../utils/sleep";
//import { Toast } from 'antd-mobile';
//import { history } from 'umi';
//import { cookie, urlGet } from 'project-libs';


/*
import { useStoreHook } from 'think-react-store';
const { rssList: { rssList, setRsslist, getRssListAsync} } = useStoreHook();
 */
export default {
  state: {
    rssList:null,
  },
  reducers: {
    setRsslist(state, payload){
      const res={
        ...state,
        rssList:payload
      };
      return res;
    },
  },
  effects: {
    async getRssListAsync(dispatch, rootState, payload){
      //console.log("getUserAsync")
      //
      const res=await Http({
        url: "/rss/list", body: {
        }
      });
      await dispatch({
        type: 'setRsslist',
        payload: res?.rss || []
      });
    },
  }
};
