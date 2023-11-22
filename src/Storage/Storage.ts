import {defineStore} from "pinia";
import type {VerifyApiResponse} from "@/Proxy/ApiProxy";
import {state} from "vue-tsc/out/shared";

export const useLoginStore = defineStore('loginStatus', {
    state: ()=>{
        return { result:{} as VerifyApiResponse};
    },

    getters: {
        IsLogin(state){ return state.result.valid}
    },

    actions: {
        login(result: VerifyApiResponse){
            this.result = result;
        },
        logOut(){
            this.result = {valid: false, token:""};
        }
    },
});
