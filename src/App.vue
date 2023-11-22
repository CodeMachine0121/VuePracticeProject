<script setup lang="ts">
import OtpVerify from '@/components/OtpVerify.vue'
import Profile from '@/components/Profile.vue'
import {useLoginStore} from "@/Storage/Storage";
import type {VerifyApiResponse} from "@/Proxy/ApiProxy";


const store = useLoginStore();
const login = (result: VerifyApiResponse) => {
  store.login(result);
}
const logOut =  () => {
  store.logOut();
}

</script>

<template>
  <Profile v-if="store.IsLogin" @logout="logOut"/>
  <OtpVerify v-else @login="login"/>
</template>
