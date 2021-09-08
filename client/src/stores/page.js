import { Http } from '@/utils';
import sleep from "../utils/sleep";
//import { history } from 'umi';
//import { cookie, urlGet } from 'project-libs';

export default {
  state: {
    //articles edit add
    page:"articles",
    showArticle:false,
    showArticleWindow:false,
  },
  reducers: {
    setPage(state, payload){
      const res={
        ...state,
        page:payload
      };
      if(payload!=="articles"){
        res["showArticleWindow"]=false;
      }
      return res;
    },
    setShowArticle(state, payload){
      const res={
        ...state,
        showArticle:payload
      };
      return res;
    },
    setShowArticleWindow(state, payload){
      const res={
        ...state,
        showArticleWindow:payload
      };
      return res;
    }
  },
  effects: {
    // async getUserAsync(dispatch, rootState, payload){
    //   console.log("getUserAsync")
    //   await sleep(1000);
    //   dispatch({
    //     type: 'getUser',
    //     payload: {text:"hello"}
    //   });
    // },
  }
};
