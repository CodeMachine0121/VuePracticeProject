<script setup lang="ts">
import OtpVerify from '@/components/OtpVerify.vue'
import Profile from '@/components/Profile.vue'
import {LoginStatusStore} from "@/Storage/Storage";
import type {VerifyApiResponse} from "@/Proxy/ApiProxy";

const store = LoginStatusStore();
const login = async (result: VerifyApiResponse) => {
  store.login(result);
}
const logOut =  () => {
  store.logOut();
}


</script>

<template>
  <Profile v-if="store.IsLogin" @logout="logOut" :token="store.GetToken"/>
  <OtpVerify v-else @login="login"/>
</template>
