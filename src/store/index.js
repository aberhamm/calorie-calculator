import Vue from 'vue';
import Vuex from 'vuex';
import running from './modules/running';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        running,
    },
    strict: debug,
});
