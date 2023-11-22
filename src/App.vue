<script setup lang="ts">
import OtpVerify from '@/components/OtpVerify.vue'
import Profile from '@/components/Profile.vue'
import {ref} from "vue";

const loginStatus = ref<Boolean>(false)
const updateLoginStatus = (status: Boolean)=>{
  loginStatus.value = status;
}


</script>

<template>
  <Profile v-if="loginStatus" @update-login-status="updateLoginStatus"/>
  <OtpVerify v-else @update-login-status="updateLoginStatus"/>
</template>
