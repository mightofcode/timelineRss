import { Http } from '@/utils';
import sleep from "../utils/sleep";
//import { history } from 'umi';
//import { cookie, urlGet } from 'project-libs';

export default {
  state: {
    text:"init"
  },
  reducers: {
    getUser(state, payload){
      return {
        ...state,
        ...payload
      }
    },
    editUser(state, payload){
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    async getUserAsync(dispatch, rootState, payload){
      console.log("getUserAsync")
      await sleep(1000);
      dispatch({
        type: 'getUser',
        payload: {text:"hello"}
      });
    },
  }
};
