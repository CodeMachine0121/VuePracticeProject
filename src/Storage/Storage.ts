import {defineStore} from "pinia";
import type {AuthApiSuccessResponse, VerifyApiResponse} from "@/Proxy/ApiProxy";
import {state} from "vue-tsc/out/shared";
import {Auth} from "@/Proxy/ApiProxy";

export const LoginStatusStore = defineStore('loginStatus', {
    state: ()=>{
        return { result:{} as VerifyApiResponse};
    },

    persist: {
        storage: sessionStorage,
    },

    getters: {
        IsLogin(state){ return state.result.valid},
        GetToken(state){return state.result.token}
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


export const ProfileStore = defineStore("profileStore",{
    state: ()=>{
        return { profile:{} as AuthApiSuccessResponse};
    },

    persist: {
        storage: sessionStorage,
    },

    getters: {
        GetProfile(state){return state.profile}
    },

    actions: {
        async Get(token: string) {
            const response = await Auth(token);
            if ('username' in response) {
                this.profile = response;
            }
        },
    },
});
