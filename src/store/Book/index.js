/**
 * Created by 11795 on 2019/4/8.
 */

import axios from 'axios';

const state = {
  imgUrls:[],
};


const mutations = {
  GETCHANNELS(state,res){
    state.imgUrls=res;
  }
};

const actions = {
  getChannels({commit}){
    let query={query: "{Book}",variables: null};

    wx.request({
      url:"https://www.wuxingzhihuan.club:3000/graphql",
      data:query,
      method:"POST",
      success: function(res) {
        console.log(res);
        commit("GETCHANNELS",res);
      }
    })
  }
};

export default{
  state,
  mutations,
  actions
}
