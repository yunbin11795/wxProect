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
    let query={query: "{hello}",variables: null};

    wx.request({
      url:"http://47.107.247.199:3000/graphql",
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
