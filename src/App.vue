<script setup lang="ts">
import OtpVerify from '@/components/OtpVerify.vue'
import Profile from '@/components/Profile.vue'
import {useLoginStore} from "@/Storage/Storage";
import type {VerifyApiResponse} from "@/Proxy/ApiProxy";
import {onMounted} from "vue";


const store = useLoginStore();
const login = async (result: VerifyApiResponse) => {
  await store.login(result);
}
const logOut = async () => {
  await store.logOut();
}

</script>

<template>
  <Profile v-if="store.IsLogin" @logout="logOut"/>
  <OtpVerify v-else @login="login"/>
</template>
