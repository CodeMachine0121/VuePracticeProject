import {defineStore} from "pinia";
import {state} from "vue-tsc/out/shared";

export const useLoginStore = defineStore('loginStatus', {
    state: ()=>{
        return {isLogin: false};
    },

    getters: {
        IsLogin(state){ return this.isLogin}
    },

    actions: {
        update(){this.isLogin=!this.isLogin}
    },
});
