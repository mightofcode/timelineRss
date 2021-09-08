import { Http } from '@/utils';
import sleep from "../utils/sleep";
//import { history } from 'umi';
//import { cookie, urlGet } from 'project-libs';


/*
import { useStoreHook } from 'think-react-store';
const { timeline: { articles, setArticles, getArticlesAsync} } = useStoreHook();
 */
export default {
  state: {
    articles:null,
  },
  reducers: {
    setArticles(state, payload){
      const res={
        ...state,
        articles:payload
      };
      return res;
    },
  },
  effects: {
    async getArticlesAsync(dispatch, rootState, payload){
      //console.log("getUserAsync")
      //
      const res=await Http({
        url: "/rss/timeline", body: {
        }
      });

      await dispatch({
        type: 'setArticles',
        payload: res?.articles || []
      });
    },
  }
};
