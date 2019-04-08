/**
 * Created by 11795 on 2019/4/8.
 */

import Vue from 'vue'
import Vuex from 'vuex'

import Book from './Book';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Book
  }
});
