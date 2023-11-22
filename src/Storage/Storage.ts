import {defineStore} from "pinia";
import type {VerifyApiResponse} from "@/Proxy/ApiProxy";

export const useLoginStore = defineStore('loginStatus', {
    state: ()=>{
        return {isLogin: false, token: ""};
    },

    getters: {
        IsLogin(state){ return this.isLogin}
    },

    actions: {
        login(result: VerifyApiResponse){
            this.isLogin = result.valid;
            this.token = result.token;
        },
        logOut(){
            this.isLogin=false;
            this.token="";
        }
    },
});
